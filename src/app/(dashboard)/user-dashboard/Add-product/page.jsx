"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUpload, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";

export default function AddProductPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Auth guard
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  // States
  const [productData, setProductData] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
    sizes: [],
    details: [""],
    images: [""],
  });

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [newDetail, setNewDetail] = useState("");
  const [imageUrls, setImageUrls] = useState([""]);

  if (status === "loading") return <p>Loading...</p>;

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Sizes toggle
  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // Details handlers
  const addDetail = () => {
    if (newDetail.trim()) {
      setProductData({
        ...productData,
        details: [...productData.details, newDetail],
      });
      setNewDetail("");
    }
  };

  const removeDetail = (index) => {
    const updated = [...productData.details];
    updated.splice(index, 1);
    setProductData({ ...productData, details: updated });
  };

  const handleDetailChange = (index, value) => {
    const updated = [...productData.details];
    updated[index] = value;
    setProductData({ ...productData, details: updated });
  };

  // Images handlers
  const addImageUrl = () => setImageUrls([...imageUrls, ""]);

  const handleImageUrlChange = (index, value) => {
    const updated = [...imageUrls];
    updated[index] = value;
    setImageUrls(updated);
  };

  const removeImageUrl = (index) => {
    const updated = [...imageUrls];
    updated.splice(index, 1);
    setImageUrls(updated);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...productData,
      sizes: selectedSizes,
      images: imageUrls.filter((url) => url.trim() !== ""),
    };

    try {
      const res = await fetch("/api/add_product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      const result = await res.json();
      toast.success("Product added successfully!");
      router.push("/dashboard/products");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product");
    }
  };

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  const categories = ["Men", "Women", "Kids", "Accessories", "Footwear"];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
        {/* Category & Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>
        </div>

        {/* Price & Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter price"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Available Sizes</label>
          <div className="flex flex-wrap gap-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeToggle(size)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedSizes.includes(size)
                    ? "bg-blue-100 text-blue-700 border-blue-300"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                } hover:bg-blue-50 transition-colors`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
          <div className="space-y-3">
            {imageUrls.map((url, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => handleImageUrlChange(idx, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
                {imageUrls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImageUrl(idx)}
                    className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addImageUrl}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <FaPlus className="mr-2" />
              Add another image URL
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Details</label>
          <div className="space-y-3">
            {productData.details.map((detail, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="text"
                  value={detail}
                  onChange={(e) => handleDetailChange(idx, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter detail (e.g. Material: Cotton)"
                />
                {productData.details.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDetail(idx)}
                    className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addDetail}
            className="mt-3 flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaPlus className="mr-2" />
            Add another detail
          </button>
        </div>

        {/* Submit */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
