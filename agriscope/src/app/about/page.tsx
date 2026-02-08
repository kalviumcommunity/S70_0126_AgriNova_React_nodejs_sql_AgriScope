// Static Rendering (SSG) - About Page
export const revalidate = false;

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About AgriScope
          </h1>
          <p className="text-xl text-gray-700">
            Empowering farmers with transparent market information
          </p>
        </div>

        {/* Mission Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🎯 Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AgriScope aims to bridge the information gap between farmers and
            markets. We believe every farmer deserves access to real-time price
            data and demand insights to make informed selling decisions.
          </p>
        </section>

        {/* Problem Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            ❌ The Problem
          </h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Small and marginal farmers lack transparent, real-time access to
              mandi pricing
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Heavy dependence on intermediaries leads to unfair price
              realization
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              No visibility into buyer demand before harvest or mandi dispatch
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Information asymmetry results in unsold produce and financial
              losses
            </li>
          </ul>
        </section>

        {/* Solution Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ Our Solution
          </h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <strong>Live Price Dashboard:</strong> Aggregated mandi prices
              from across India, updated in real-time
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <strong>Demand Signals:</strong> Buyers can post their
              requirements, giving farmers visibility into market demand
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <strong>Smart Alerts:</strong> Notifications when prices rise or
              demand spikes for specific crops
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <strong>Simple Interface:</strong> Farmer-friendly design that
              works on any device
            </li>
          </ul>
        </section>

        {/* Value Section */}
        <section className="bg-green-50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            💡 Value We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Fairer Price Discovery
              </h3>
              <p className="text-gray-600">
                Know the market rate before negotiating with buyers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Demand Visibility
              </h3>
              <p className="text-gray-600">
                Plan harvest and dispatch based on actual buyer needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Low-Cost Platform
              </h3>
              <p className="text-gray-600">
                Free to use, scalable using efficient caching and open data
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                No Complexity
              </h3>
              <p className="text-gray-600">
                Simple, usable interface without unnecessary features
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            👥 Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <h3 className="font-semibold text-gray-800">Zavian Alam</h3>
              <p className="text-gray-600 text-sm">Frontend + UX</p>
            </div>
            <div className="text-center p-4">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <h3 className="font-semibold text-gray-800">Rithvik Krishna D K</h3>
              <p className="text-gray-600 text-sm">Backend + Data Logic</p>
            </div>
            <div className="text-center p-4">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
              <h3 className="font-semibold text-gray-800">Koushik Reddy</h3>
              <p className="text-gray-600 text-sm">DevOps + Testing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
