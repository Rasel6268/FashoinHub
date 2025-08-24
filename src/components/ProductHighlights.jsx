"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Mock products data
const products = [
  {
    id: "1",
    name: "Classic Leather Jacket",
    description: "Premium quality leather jacket for all seasons.",
    price: 120,
    image:
      " https://i.ibb.co.com/WpgV489W/photo-1632958978877-69406b688b11.jpg",
    category: "Outerwear",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Summer Floral Dress",
    description: "Lightweight and breezy floral dress.",
    price: 45,
    image:
      "https://i.ibb.co.com/8DyFGL1H/eugenia-pankiv-j9-Zc-Fkw3-N4-I-unsplash.jpg",
    category: "Dresses",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Casual Sneakers",
    description: "Comfortable sneakers for everyday wear.",
    price: 60,
    image: "https://i.ibb.co.com/CKysf9c3/photo-1542272606-405060e9517f.jpg",
    category: "Footwear",
    rating: 4.3,
  },
  {
    id: "4",
    name: "Elegant Handbag",
    description: "Stylish handbag to complete your outfit.",
    price: 80,
    image:
      "https://i.ibb.co.com/G4mCxQyY/zhaoyi-meng-Aqx94-H6bi4g-unsplash.jpg",
    category: "Accessories",
    rating: 4.7,
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment:
      "The quality of these products exceeded my expectations. The leather jacket is now my favorite wardrobe item!",
    rating: 5,
    avatar:
      "https://i.ibb.co.com/h1CtZ3Sg/andrew-power-9-ZXp-KFl-Qkjo-unsplash.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    comment:
      "Fast shipping and excellent customer service. The sneakers are incredibly comfortable for all-day wear.",
    rating: 4,
    avatar:
      "https://i.ibb.co.com/kVHjMVzX/eugenia-pankiv-NFtq0srzbw-M-unsplash.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    comment:
      "I love my new floral dress! The fabric is high quality and it fits perfectly. Will definitely shop here again.",
    rating: 5,
    avatar:
      "https://i.ibb.co.com/FqC9QGhd/sarah-brown-t-Td-C88-6a-I-unsplash.jpg",
  },
];

// Promotion data
const promotions = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Up to 50% off on summer collection",
    discount: "50% OFF",
    code: "SUMMER2023",
    expiry: "August 31, 2023",
    image: "/promos/summer-sale.jpg",
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Free worldwide shipping on orders over $100",
    discount: "FREE SHIPPING",
    code: "FREESHIP",
    expiry: "December 31, 2023",
    image: "https://i.ibb.co.com/vvm6BJ5y/photo-1492707892479-7bc8d5a4ee93.jpg",
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProducts, setVisibleProducts] = useState(products);

  // Filter products by category
  useEffect(() => {
    if (activeCategory === "All") {
      setVisibleProducts(products);
    } else {
      setVisibleProducts(
        products.filter((product) => product.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://i.ibb.co.com/3yGnbGQh/photo-1558769132-cb1aea458c5e.jpg"
                alt="About our brand"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, we started with a simple mission: to provide
                high-quality, stylish clothing that doesn't break the bank. Our
                team of designers travels the world to find inspiration and the
                best materials for our products.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that everyone deserves to look and feel their best,
                which is why we're committed to creating fashion that's
                accessible, sustainable, and timeless.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Discover our most popular items this season
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-10 flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } shadow-sm`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-900 text-lg">
                      ${product.price}
                    </p>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                      <Link
                        href={`/products/${product.id}`}
                        className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-full hover:bg-pink-700 transition shadow-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block px-8 py-3 border-2 border-pink-600 text-pink-600 font-medium rounded-full hover:bg-pink-600 hover:text-white transition duration-300 shadow-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promotion Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            Special Offers
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Don't miss out on these limited-time deals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="relative rounded-2xl overflow-hidden shadow-xl group"
              >
                <div className="w-full h-64 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-white text-pink-600 text-xs font-bold px-3 py-1 rounded-full">
                        {promo.discount}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                    <p className="text-sm mb-4">{promo.description}</p>
                    <div className="flex flex-col items-center">
                      <p className="text-sm mb-2">
                        Use code:{" "}
                        <span className="font-mono font-bold text-lg">
                          {promo.code}
                        </span>
                      </p>
                      <p className="text-xs mb-4">
                        Valid until: {promo.expiry}
                      </p>
                      <button className="px-4 py-2 bg-white text-pink-600 text-sm font-bold rounded-full hover:bg-gray-100 transition">
                        Claim Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Hear from shoppers who love our products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for exclusive deals, new arrivals, and
            style tips.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full border-1 border-pink-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-inner"
            />
            <button className="px-6 py-3 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
