import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../component/product";
import { useSearchParams } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]); // backend data
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [mood, setMood] = useState("All");
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const API_URL = "http://localhost:9003/product"; // backend endpoint

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(API_URL);
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    const categoryParam = searchParams.get("category");
    const activeCategory = categoryParam || category;

    filtered = filtered.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      const moodMatch = mood === "All" || product.mood === mood;

     const priceMatch =
  priceRange === "All" ||
  (priceRange === "Under Rs 500" && product.price < 500) ||
  (priceRange === "Rs 500 – Rs 1000" &&
    product.price >= 500 &&
    product.price <= 1000) ||
  (priceRange === "Rs 1000 – Rs 2000" &&
    product.price > 1000 &&
    product.price <= 2000) ||
  (priceRange === "Luxury+" && product.price > 2000);


      return categoryMatch && moodMatch && priceMatch;
    });

    setFilteredProducts(filtered);
    if (categoryParam) setCategory(categoryParam);
  }, [products, category, priceRange, mood, searchParams]);

  return (
    <section className="w-full bg-[#fbf3ee] text-[#2d1b12]">

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pt-32 pb-24">
        <span className="text-[12px] tracking-widest text-[#6b3f2c]">
          SERENIQUE SHOP
        </span>

        <h1 className="font-serif text-[44px] md:text-[58px] mt-6">
          Curated Fragrances
          <br />
          Crafted With Emotion
        </h1>

        <p className="mt-6 text-[15px] text-[#6f6f6f] max-w-xl">
          Explore our signature collection — fragrances designed to
          express identity, elegance, and timeless sophistication.
        </p>
      </div>

      <div className="relative h-[60vh] mb-32">
        <img
          src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="font-serif text-white text-[36px] md:text-[48px]">
            Signature Collection
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 pb-40">
        <div className="grid md:grid-cols-4 gap-16">

          <aside className="md:col-span-1 space-y-16">

            <div>
              <h3 className="font-serif text-[22px] mb-6">Categories</h3>
              <ul className="space-y-3 text-[14px] text-[#6f6f6f]">
                {["All", "Woody", "Floral", "Citrus", "Oriental"].map((item) => (
                  <li
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`cursor-pointer ${category === item ? "text-[#2d1b12] font-semibold" : ""}`}
                  >
                    {item === "All" ? "All Fragrances" : item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-[22px] mb-6">Price Range</h3>
              <ul className="space-y-3 text-[14px] text-[#6f6f6f]">
                {["All", "Under Rs 500", "Rs 500 – Rs 1000", "Rs 1000 – Rs 2000", "Luxury+"].map(
                  (item) => (
                    <li
                      key={item}
                      onClick={() => setPriceRange(item)}
                      className={`cursor-pointer ${priceRange === item ? "text-[#2d1b12] font-semibold" : ""}`}
                    >
                      {item === "All" ? "All Prices" : item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-[22px] mb-6">Mood</h3>
              <ul className="space-y-3 text-[14px] text-[#6f6f6f]">
                {["All", "Bold", "Romantic", "Fresh", "Mysterious"].map((item) => (
                  <li
                    key={item}
                    onClick={() => setMood(item)}
                    className={`cursor-pointer ${mood === item ? "text-[#2d1b12] font-semibold" : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </aside>

          <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {loading ? (
              <p className="text-[#6f6f6f]">Loading products...</p>
            ) : filteredProducts.length === 0 ? (
              <p className="text-[#6f6f6f]">No products found.</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>

        </div>
      </div>

      <div className="bg-[#f6ebe4] py-32 text-center">
        <h3 className="font-serif text-[30px] max-w-3xl mx-auto">
          A Fragrance Is Not Chosen — It Is Felt
        </h3>
        <p className="mt-6 text-[14px] text-[#6f6f6f] max-w-xl mx-auto">
          Each bottle holds emotion, memory, and artistry crafted to
          resonate long after the moment passes.
        </p>
      </div>

      <div className="py-28 text-center">
        <span className="font-serif tracking-[0.3em] text-[#6b3f2c]">
          SERENIQUE
        </span>
      </div>

    </section>
  );
};

export default ShopPage;
