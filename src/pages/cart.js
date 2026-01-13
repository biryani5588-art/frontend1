import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import axios from "axios";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();
  
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [showCheckoutDetails, setShowCheckoutDetails] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (cartItems.length && orderPlaced) setOrderPlaced(false);
  }, [cartItems, orderPlaced]);

  const handleCheckout = async () => {
    if (!fullName || !address || !city || !phone) {
      return setMessage("Please fill all delivery details");
    }


    try {
      setLoading(true);
      setMessage("");

      let paymentIntentId = null;

      if (paymentMethod === "card") {
        if (!stripe || !elements) {
          console.log("Stripe or Elements not loaded");
          setMessage("Stripe not loaded yet");
          setLoading(false);
          return;
        }

        const intentRes = await axios.post(
          "http://localhost:9003/order/create-payment-intent",
          { amount: Math.round(totalPrice * 100) }
        );
        console.log(intentRes.data, "<<< intent res");
        const clientSecret = intentRes.data.clientSecret;

        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
        console.log(result, "<<< payment result");

        if (result.error) {
          setMessage(result.error.message);
          setLoading(false);
          return;
        }

        if (result.paymentIntent.status !== "succeeded") {
          setMessage("Payment failed");
          setLoading(false);
          return;
        }
        
        paymentIntentId = result.paymentIntent.id;
      }

      await axios.post("http://localhost:9003/order", {
        fullName,
        address,
        city,
        phoneNumber: phone,
        paymentMethod,
        items: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalPrice,
        paymentIntentId,
      }).then((res) => {
        // console.log(res.data, "<<< order response");
        navigate(`/payment-success/${res.data._id}`);
      });

      setMessage("✅ Order placed successfully!");
      // History.push("/success");

      setOrderPlaced(true);

      setTimeout(() => {
        clearCart();
        setShowCheckoutDetails(false);
        setOrderPlaced(false);
        setFullName("");
        setAddress("");
        setCity("");
        setPhone("");
      }, 2000);
    } catch (err) {
      console.error(err);
      console.log(err, "<<< error");
      setMessage(
        err.response?.data?.message ||
          "⚠️ There was a problem placing your order."
      );
    } finally {
      setLoading(false);
      
    }
  };
  
  
  if (!cartItems.length) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#fbf3ee]">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </section>
    );
  }

  const shipping = 10;
  const totalItems = cartItems.reduce((a, i) => a + i.quantity, 0);
  const finalTotal = totalPrice + shipping;

  return (
    <section className="w-full bg-[#fbf3ee] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-28">
        <h1 className="font-serif text-[48px] mb-12 text-center">
          Your Cart
        </h1>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex bg-white p-6 rounded-xl shadow"
              >
                <img
                  src={`http://localhost:9003${item.imageURL}`}
                  alt={item.name}
                  className="w-36 h-36 object-cover rounded-lg"
                />

                <div className="flex-1 ml-6">
                  <h3 className="font-serif text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">Eau De Parfum</p>
                  <p className="mt-2 font-semibold">Rs {item.price}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          Math.max(item.quantity - 1, 1)
                        )
                      }
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="px-3 py-1 border rounded">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="ml-auto text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow h-fit space-y-4">
            <h3 className="font-serif text-xl mb-4">Order Summary</h3>

            <div className="flex justify-between">
              <span>Items ({totalItems})</span>
              <span>Rs {totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs {shipping}</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Rs {totalPrice}</span>
            </div>

            <button
              onClick={() =>
                setShowCheckoutDetails(!showCheckoutDetails)
              }
              className="w-full border px-6 py-3 rounded hover:bg-[#6b3f2c] hover:text-white transition"
            >
              {showCheckoutDetails
                ? "Hide Checkout"
                : "Proceed to Checkout"}
            </button>

            {showCheckoutDetails && (
              <div className="space-y-3 mt-4">
                <input
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6b3f2c]"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6b3f2c]"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6b3f2c]"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6b3f2c]"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <div className="space-y-2 pt-2">
                  <p className="font-semibold text-sm">Payment Method:</p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />
                    <span>Card Payment</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="p-3 border rounded bg-gray-50">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                              color: "#aab7c4",
                            },
                          },
                          invalid: {
                            color: "#9e2146",
                          },
                        },
                      }}
                    />
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  disabled={loading || orderPlaced}
                  className="w-full border px-6 py-3 rounded hover:bg-[#6b3f2c] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Processing..."
                    : orderPlaced
                    ? "Order Placed!"
                    : "Confirm & Place Order"}
                </button>

                {message && (
                  <p
                    className={`text-center text-sm mt-2 ${
                      message.includes("✅")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;