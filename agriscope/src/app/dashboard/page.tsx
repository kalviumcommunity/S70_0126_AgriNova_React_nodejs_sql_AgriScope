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
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📈 Farmer Dashboard
          </h1>
          <p className="text-gray-700">
            Real-time market overview • Updated: {currentTime}
          </p>
          <div className="mt-2 text-sm text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
            🔴 Live Data - Refreshes on every visit
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Prices Card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              💰 Live Prices
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Live
              </span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-medium text-gray-500">
                      Crop
                    </th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">
                      Mandi
                    </th>
                    <th className="text-right py-3 text-sm font-medium text-gray-500">
                      Price (₹/Q)
                    </th>
                    <th className="text-right py-3 text-sm font-medium text-gray-500">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="py-3 font-medium text-gray-800">
                        {item.crop}
                      </td>
                      <td className="py-3 text-gray-600">{item.mandi}</td>
                      <td className="py-3 text-right font-semibold">
                        ₹{item.price.toLocaleString("en-IN")}
                      </td>
                      <td
                        className={`py-3 text-right font-medium ${
                          item.change >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {item.change >= 0 ? "↑" : "↓"}{" "}
                        {Math.abs(item.change).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Alerts Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              🔔 Recent Alerts
            </h2>
            <div className="space-y-3">
              {alerts.slice(0, 4).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg ${
                    alert.type === "price_rise"
                      ? "bg-green-50 border-l-4 border-green-500"
                      : alert.type === "demand_spike"
                      ? "bg-amber-50 border-l-4 border-amber-500"
                      : "bg-red-50 border-l-4 border-red-500"
                  }`}
                >
                  <p className="text-sm font-medium text-gray-800">
                    {alert.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
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
              className="block text-center mt-4 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              View All Alerts →
            </a>
          </div>

          {/* Demand Summary Card */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              📢 Buyer Demand Summary
              <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                Today
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {demand.map((item) => (
                <div
                  key={item.crop}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.crop}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p className="text-gray-600">
                      Quantity:{" "}
                      <span className="font-medium text-gray-800">
                        {item.totalQuantity} Quintals
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Avg. Price:{" "}
                      <span className="font-medium text-green-600">
                        ₹{item.avgPrice.toLocaleString("en-IN")}/Q
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Active Buyers:{" "}
                      <span className="font-medium text-blue-600">
                        {item.buyers}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/demand"
              className="inline-block mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium"
            >
              Submit Your Demand →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
