"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
 console.log(product)

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition relative">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-pink-600 font-bold mb-4">${product.price}</p>
        <div className="flex justify-between">
             <Link href={`/product/${product._id}`} className="border border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white transition cursor-pointer">
            Details
          </Link>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition cursor-pointer">
            Add to Cart
          </button>
         
        </div>
      </div>
    </div>
  );
}
