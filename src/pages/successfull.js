import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9003/order/${orderId}`
        );
        setOrder(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!order) {
    return <h2 style={{ textAlign: "center" }}>Order not found</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.success}>✅ Order Placed Successfully</h1>

        <div style={styles.section}>
          <h3>Customer Details</h3>
          <p><b>Name:</b> {order.fullName}</p>
          <p><b>Phone:</b> {order.phoneNumber}</p>
          <p><b>Address:</b> {order.address}, {order.city}</p>
        </div>

        <div style={styles.section}>
          <h3>Payment Details</h3>
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Payment Method:</b> {order.paymentMethod}</p>
          <p><b>Payment Status:</b> {order.paymentStatus || "pending"}</p>

          {order.stripePaymentIntentId && (
            <p>
              <b>Stripe Payment ID:</b> {order.stripePaymentIntentId}
            </p>
          )}
        </div>

        <div style={styles.section}>
          <h3>Ordered Items</h3>
          {order.items.map((item, index) => (
            <div key={index} style={styles.item}>
              <div>
                <b>{item.name}</b>
                <p style={styles.qty}>Qty: {item.quantity}</p>
              </div>
              <div>
                Rs. {item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.total}>
          <h3>Total Amount: Rs. {order.totalPrice}</h3>
          <p style={styles.date}>
            Ordered on: {new Date(order.createdAt).toLocaleString()}
          </p>
          <p>
            <b>Order Status:</b> {order.status}
          </p>
        </div>

        <button
          style={styles.button}
          onClick={() => navigate("/shop")}
        >
          Go to Shop
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginTop: "80px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "650px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  success: {
    textAlign: "center",
    color: "#6a3a1fff",
    marginBottom: "25px",
  },
  section: {
    marginBottom: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  qty: {
    fontSize: "13px",
    color: "#666",
  },
  total: {
    textAlign: "right",
    marginTop: "25px",
    fontWeight: "bold",
  },
  date: {
    fontSize: "13px",
    color: "#777",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#6a3a1f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "25px",
  },
};

export default PaymentSuccess;
