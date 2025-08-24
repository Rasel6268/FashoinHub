"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";
import FashionLoading from "@/components/FashionLoading";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/product_details/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  console.log(product)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    alert(
      `Added to cart: ${product.name} (Size: ${selectedSize}, Quantity: ${quantity})`
    );
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // 🔹 Loading & Error Guards
  if (loading) return <FashionLoading></FashionLoading>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href="/products"
                className="text-gray-500 hover:text-gray-700"
              >
                Products
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="sticky top-4">
              <div className="rounded-lg bg-white p-4 shadow-sm mb-4 overflow-hidden">
                <img
                  src={product.images?.[activeImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images?.map((img, index) => (
                  <div
                    key={index}
                    className={`rounded-md cursor-pointer p-1 transition-all duration-200 ${
                      activeImage === index
                        ? "ring-2 ring-indigo-500 bg-indigo-50"
                        : "hover:ring-1 hover:ring-gray-300"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-20 object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-1">
                    {product.name}
                  </h1>
                </div>
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Sizes */}
              {product.sizes && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`w-12 h-10 flex items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-300 text-gray-900 hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    className="p-2 w-10 h-10 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 flex items-center justify-center"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-4 text-gray-900 font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    className="p-2 w-10 h-10 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 flex items-center justify-center"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 bg-pink-600 py-3 px-8 rounded-md text-white font-medium hover:bg-pink-700 transition-colors"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="p-3 rounded-md border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
