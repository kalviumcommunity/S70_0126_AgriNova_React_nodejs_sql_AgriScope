import Link from "next/link";

// Static Rendering (SSG) - Home Page
export const revalidate = false;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-600 to-green-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            🌾 Welcome to AgriScope
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
            Real-time mandi prices and buyer demand insights for farmers.
            <br />
            No middlemen. Fair prices. Direct market access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prices"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              📊 View Mandi Prices
            </Link>
            <Link
              href="/dashboard"
              className="bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-900 transition-colors shadow-lg border border-green-500"
            >
              📈 Go to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How AgriScope Helps You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Live Mandi Prices
              </h3>
              <p className="text-gray-600 text-lg">
                Get real-time prices from mandis across India. Updated every
                minute for accurate pricing decisions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Buyer Demand Signals
              </h3>
              <p className="text-gray-600 text-lg">
                See what buyers are looking for. Match your produce with demand
                before you even reach the mandi.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Price & Demand Alerts
              </h3>
              <p className="text-gray-600 text-lg">
                Get notified when prices rise or demand spikes. Never miss the
                right time to sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Are You a Buyer?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Submit your crop demand and connect directly with farmers.
          </p>
          <Link
            href="/demand"
            className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg inline-block"
          >
            📝 Submit Your Demand
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600">500+</div>
              <div className="text-gray-600 mt-2">Mandis Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">50+</div>
              <div className="text-gray-600 mt-2">Crops Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">10K+</div>
              <div className="text-gray-600 mt-2">Farmers Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600 mt-2">Price Updates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
