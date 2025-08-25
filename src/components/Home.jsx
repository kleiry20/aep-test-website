import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = ["smartphones", "laptops", "sunglasses"];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=6`
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h2>Online store - SHOP AWAY!</h2>
      <h3>Sale Sale Sale</h3>

      {/* Category Cards */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              cursor: "pointer",
              width: "140px",
              textAlign: "center",
              background: selectedCategory === cat ? "#f0f0f0" : "white",
              userSelect: "none",
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div>
        {loading && <p>Loading products...</p>}
        {!loading && products.length === 0 && selectedCategory && (
          <p>No products found for {selectedCategory}</p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {/* Clickable area goes to product detail */}

              <a
                href={`/product/${p.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="p-4 border rounded-lg shadow-md">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="h-40 w-full object-contain mb-2"
                  />
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  <p className="text-gray-600">${p.price}</p>
                </div>
              </a>

              {/* Action buttons (stubbed for now) */}
              <div
                style={{ display: "flex", gap: "0.5rem", marginTop: "auto" }}
              >
                <button onClick={() => console.log("Add to cart", p.id)}>
                  Add to Cart
                </button>
                <button onClick={() => console.log("Wishlist", p.id)}>
                  Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
