import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products on mount
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones?limit=6") // fetch only 6 items for demo
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {products?.products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-contain p-4 bg-gray-50"
            />
            <div className="p-4">
              <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                ${product.price}
              </p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
