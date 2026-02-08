import Link from "next/link";

// Static Rendering (SSG) - Home Page
export const revalidate = false;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-650 to-green-700 text-white py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            🌾 Welcome to AgriScope
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-green-50 mb-8 leading-relaxed max-w-2xl mx-auto">
            Real-time mandi prices and buyer demand insights for farmers.
            <span className="block mt-2 text-green-100">
              No middlemen. Fair prices. Direct market access.
            </span>
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Primary actions">
            <Link
              href="/prices"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-gray-50 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50 active:bg-gray-100"
            >
              <span aria-hidden="true">📊</span>
              <span>View Mandi Prices</span>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-green-800/80 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md border border-green-400/30 hover:bg-green-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300/50 active:bg-green-900"
            >
              <span aria-hidden="true">📈</span>
              <span>Go to Dashboard</span>
            </Link>
          </nav>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 md:py-20 px-6 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 md:mb-14">
            How AgriScope Helps You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4" aria-hidden="true">💰</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Live Mandi Prices
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Get real-time prices from mandis across India. Updated every
                minute for accurate pricing decisions.
              </p>
            </article>

            {/* Feature 2 */}
            <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4" aria-hidden="true">📢</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Buyer Demand Signals
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                See what buyers are looking for. Match your produce with demand
                before you even reach the mandi.
              </p>
            </article>

            {/* Feature 3 */}
            <article className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md">
              <div className="text-4xl md:text-5xl mb-4" aria-hidden="true">🔔</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Price & Demand Alerts
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Get notified when prices rise or demand spikes. Never miss the
                right time to sell.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50/70 border-y border-amber-100 py-14 md:py-16 px-6" aria-labelledby="buyer-cta">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="buyer-cta" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Are You a Buyer?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Submit your crop demand and connect directly with farmers.
          </p>
          <Link
            href="/demand"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300/50 active:bg-amber-700"
          >
            <span aria-hidden="true">📝</span>
            <span>Submit Your Demand</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 md:py-16 px-6 bg-white" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-green-600">500+</div>
              <div className="text-gray-600 mt-1 text-sm md:text-base">Mandis Covered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-green-600">50+</div>
              <div className="text-gray-600 mt-1 text-sm md:text-base">Crops Tracked</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600 mt-1 text-sm md:text-base">Farmers Helped</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 mt-1 text-sm md:text-base">Price Updates</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
