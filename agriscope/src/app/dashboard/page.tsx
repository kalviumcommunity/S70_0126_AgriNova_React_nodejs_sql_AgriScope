// SSR - Dynamic Rendering (force-dynamic, no-store)
export const dynamic = "force-dynamic";

// Types
interface Price {
  id: number;
  crop: string;
  mandi: string;
  price: number;
  change: number;
}

interface DemandSummary {
  crop: string;
  totalQuantity: number;
  avgPrice: number;
  buyers: number;
}

interface Alert {
  id: number;
  type: "price_rise" | "demand_spike" | "price_drop";
  message: string;
  crop: string;
  timestamp: string;
}

// Mock data fetchers (replace with actual API calls)
async function getLivePrices(): Promise<Price[]> {
  // In production:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prices`, { cache: 'no-store' });
  // return res.json();

  return [
    { id: 1, crop: "Wheat", mandi: "Azadpur", price: 2250, change: 3.5 },
    { id: 2, crop: "Rice", mandi: "Karnal", price: 3850, change: -1.2 },
    { id: 3, crop: "Tomato", mandi: "Vashi", price: 1800, change: 8.5 },
    { id: 4, crop: "Onion", mandi: "Lasalgaon", price: 1500, change: -2.8 },
    { id: 5, crop: "Potato", mandi: "Agra", price: 1000, change: 1.5 },
  ];
}

async function getDemandSummary(): Promise<DemandSummary[]> {
  // In production:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/demand`, { cache: 'no-store' });
  // return res.json();

  return [
    { crop: "Wheat", totalQuantity: 500, avgPrice: 2200, buyers: 12 },
    { crop: "Rice", totalQuantity: 350, avgPrice: 3800, buyers: 8 },
    { crop: "Tomato", totalQuantity: 200, avgPrice: 1750, buyers: 15 },
    { crop: "Onion", totalQuantity: 450, avgPrice: 1450, buyers: 20 },
  ];
}

async function getRecentAlerts(): Promise<Alert[]> {
  // In production:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/alerts`, { cache: 'no-store' });
  // return res.json();

  return [
    {
      id: 1,
      type: "price_rise",
      message: "Tomato prices up 8.5% in Vashi mandi",
      crop: "Tomato",
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      id: 2,
      type: "demand_spike",
      message: "High demand for Onion in Maharashtra region",
      crop: "Onion",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    },
    {
      id: 3,
      type: "price_drop",
      message: "Rice prices dropped 1.2% in Karnal",
      crop: "Rice",
      timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    },
    {
      id: 4,
      type: "price_rise",
      message: "Wheat prices rising across UP mandis",
      crop: "Wheat",
      timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    },
  ];
}

export default async function DashboardPage() {
  // Fetch all data in parallel
  const [prices, demand, alerts] = await Promise.all([
    getLivePrices(),
    getDemandSummary(),
    getRecentAlerts(),
  ]);

  const currentTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <main className="min-h-screen py-8 md:py-10 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            📈 Farmer Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Real-time market overview
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-400">Updated {currentTime}</span>
          </p>
          <span className="inline-flex items-center gap-1.5 mt-2 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Live Data
          </span>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Live Prices Card */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <h2 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
              💰 Live Prices
              <span className="text-[10px] uppercase tracking-wide bg-green-50 text-green-600 px-1.5 py-0.5 rounded font-medium">
                Live
              </span>
            </h2>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full min-w-[320px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2.5 px-4 md:px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Crop
                    </th>
                    <th className="text-left py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Mandi
                    </th>
                    <th className="text-right py-2.5 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Price (₹/Q)
                    </th>
                    <th className="text-right py-2.5 px-4 md:px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`border-b border-gray-50 hover:bg-gray-50/70 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                      }`}
                    >
                      <td className="py-2.5 px-4 md:px-2 font-medium text-gray-800 text-sm">
                        {item.crop}
                      </td>
                      <td className="py-2.5 px-2 text-gray-600 text-sm">
                        {item.mandi}
                      </td>
                      <td className="py-2.5 px-2 text-right font-semibold text-gray-800 text-sm tabular-nums">
                        ₹{item.price.toLocaleString("en-IN")}
                      </td>
                      <td className="py-2.5 px-4 md:px-2 text-right text-sm tabular-nums">
                        <span
                          className={`inline-flex items-center gap-0.5 font-medium ${
                            item.change >= 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {item.change >= 0 ? "↑" : "↓"}
                          {Math.abs(item.change).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Alerts Card */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <h2 className="text-base font-semibold text-gray-800 mb-3">
              🔔 Recent Alerts
            </h2>
            <div className="space-y-2">
              {alerts.slice(0, 4).map((alert) => (
                <div
                  key={alert.id}
                  className={`px-3 py-2.5 rounded-md border-l-2 ${
                    alert.type === "price_rise"
                      ? "bg-green-50/60 border-green-400"
                      : alert.type === "demand_spike"
                      ? "bg-amber-50/60 border-amber-400"
                      : "bg-red-50/60 border-red-400"
                  }`}
                >
                  <p className="text-sm text-gray-700 leading-snug">
                    {alert.message}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">
                    {new Date(alert.timestamp).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="/alerts"
              className="block text-center mt-3 text-green-600 hover:text-green-700 font-medium text-sm py-1"
            >
              View All Alerts →
            </a>
          </section>

          {/* Demand Summary Card */}
          <section className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h2 className="text-base font-semibold text-gray-800">
                📢 Buyer Demand Summary
              </h2>
              <span className="text-[10px] uppercase tracking-wide bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-medium">
                Today
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {demand.map((item) => (
                <article
                  key={item.crop}
                  className="bg-gray-50/80 rounded-lg p-3 border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">
                    {item.crop}
                  </h3>
                  <p className="text-xl font-bold text-gray-900 tabular-nums">
                    {item.totalQuantity}
                    <span className="text-xs font-normal text-gray-500 ml-1">Q</span>
                  </p>
                  <div className="mt-2 pt-2 border-t border-gray-200/80 space-y-0.5 text-xs">
                    <p className="text-gray-500">
                      Avg: <span className="text-gray-700 font-medium">₹{item.avgPrice.toLocaleString("en-IN")}/Q</span>
                    </p>
                    <p className="text-gray-500">
                      Buyers: <span className="text-gray-700 font-medium">{item.buyers}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="/demand"
                className="inline-flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 active:bg-green-800 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit Your Demand
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
