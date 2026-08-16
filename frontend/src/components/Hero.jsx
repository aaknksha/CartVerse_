function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-emerald-500 text-white rounded-3xl mx-auto max-w-7xl mt-10 px-10 py-24">
      <h1 className="text-6xl font-bold mb-6">
        Welcome to CartVerse
      </h1>

      <p className="text-xl mb-8">
        Shop the latest electronics, fashion, books and much more.
      </p>

      <button className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;