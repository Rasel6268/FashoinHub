"use client";

export default function Hero() {
  return (
    <section
      className="w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <div className="bg-black/40 text-white p-8 rounded-md text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the Latest Fashion Trends
        </h1>
        <p className="text-lg mb-6">
          Explore our collection of trendy clothes and accessories for every style.
        </p>
        <button className="bg-pink-600 px-6 py-3 rounded-lg hover:bg-pink-700 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
