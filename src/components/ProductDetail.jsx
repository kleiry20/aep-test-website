import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const preloaded = location.state?.product || null;

  const [product, setProduct] = useState(preloaded);
  const [loading, setLoading] = useState(!preloaded);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (product) return; // already have it from state

    const fetchById = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error(`Failed to fetch product ${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchById();
  }, [id, product]);

  if (loading) return <p style={{ padding: 16 }}>Loading...</p>;
  if (error) return <p style={{ padding: 16 }}>Error: {error}</p>;
  if (!product) return <p style={{ padding: 16 }}>Product not found.</p>;

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            height: 360,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
        <div>
          <h1 style={{ marginTop: 0 }}>{product.title}</h1>
          <p>{product.description}</p>
          <p style={{ fontWeight: 600, fontSize: 18 }}>${product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>

          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <button onClick={() => console.log("Add to cart", product.id)}>
              Add to Cart
            </button>
            <button onClick={() => console.log("Wishlist", product.id)}>
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
