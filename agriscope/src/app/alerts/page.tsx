// Server Component - Alerts Page
export const dynamic = "force-dynamic";

// Types
interface Alert {
  id: number;
  type: "price_rise" | "demand_spike" | "price_drop" | "supply_low";
  message: string;
  crop: string;
  location: string;
  percentage?: number;
  timestamp: string;
  isRead: boolean;
}

// Mock data fetcher (replace with actual API call)
async function getAlerts(): Promise<Alert[]> {
  // In production:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/alerts`, { cache: 'no-store' });
  // return res.json();

  return [
    {
      id: 1,
      type: "price_rise",
      message: "Tomato prices increased significantly in Vashi mandi",
      crop: "Tomato",
      location: "Vashi, Maharashtra",
      percentage: 8.5,
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
      isRead: false,
    },
    {
      id: 2,
      type: "demand_spike",
      message: "High buyer demand for Onion detected in Maharashtra region",
      crop: "Onion",
      location: "Lasalgaon, Maharashtra",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
      isRead: false,
    },
    {
      id: 3,
      type: "price_drop",
      message: "Rice prices have dropped in Karnal mandi",
      crop: "Rice",
      location: "Karnal, Haryana",
      percentage: -1.2,
      timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
      isRead: true,
    },
    {
      id: 4,
      type: "price_rise",
      message: "Wheat prices rising across Uttar Pradesh mandis",
      crop: "Wheat",
      location: "Multiple mandis, UP",
      percentage: 3.5,
      timestamp: new Date(Date.now() - 2 * 60 * 60000).toISOString(),
      isRead: true,
    },
    {
      id: 5,
      type: "supply_low",
      message: "Low supply of Potato reported in Agra region",
      crop: "Potato",
      location: "Agra, Uttar Pradesh",
      timestamp: new Date(Date.now() - 3 * 60 * 60000).toISOString(),
      isRead: true,
    },
    {
      id: 6,
      type: "demand_spike",
      message: "Increased demand for Cotton from textile mills",
      crop: "Cotton",
      location: "Rajkot, Gujarat",
      timestamp: new Date(Date.now() - 4 * 60 * 60000).toISOString(),
      isRead: true,
    },
    {
      id: 7,
      type: "price_rise",
      message: "Soybean prices up in Indore wholesale market",
      crop: "Soybean",
      location: "Indore, Madhya Pradesh",
      percentage: 5.2,
      timestamp: new Date(Date.now() - 5 * 60 * 60000).toISOString(),
      isRead: true,
    },
    {
      id: 8,
      type: "price_drop",
      message: "Maize prices decreased due to new arrivals",
      crop: "Maize",
      location: "Davangere, Karnataka",
      percentage: -2.8,
      timestamp: new Date(Date.now() - 6 * 60 * 60000).toISOString(),
      isRead: true,
    },
  ];
}

function getAlertIcon(type: Alert["type"]) {
  switch (type) {
    case "price_rise":
      return "📈";
    case "price_drop":
      return "📉";
    case "demand_spike":
      return "🔥";
    case "supply_low":
      return "⚠️";
    default:
      return "🔔";
  }
}

function getAlertStyle(type: Alert["type"]) {
  switch (type) {
    case "price_rise":
      return "bg-green-50 border-green-500 text-green-800";
    case "price_drop":
      return "bg-red-50 border-red-500 text-red-800";
    case "demand_spike":
      return "bg-amber-50 border-amber-500 text-amber-800";
    case "supply_low":
      return "bg-orange-50 border-orange-500 text-orange-800";
    default:
      return "bg-gray-50 border-gray-500 text-gray-800";
  }
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);

  if (diffMins < 60) {
    return `${diffMins} min ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

export default async function AlertsPage() {
  const alerts = await getAlerts();
  const unreadCount = alerts.filter((a) => !a.isRead).length;

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                🔔 Price & Demand Alerts
              </h1>
              <p className="text-gray-700">
                Stay updated with market movements and buyer activity
              </p>
            </div>
            {unreadCount > 0 && (
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {unreadCount} New Alert{unreadCount > 1 ? "s" : ""}
              </div>
            )}
          </div>
        </div>

        {/* Alert Legend */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h3 className="text-sm font-medium text-gray-800 mb-3">
            Alert Types:
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Price Rise
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Price Drop
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              Demand Spike
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Low Supply
            </span>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`rounded-lg border-l-4 p-5 shadow-sm ${getAlertStyle(
                alert.type
              )} ${!alert.isRead ? "ring-2 ring-offset-2 ring-blue-300" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-lg">{alert.crop}</span>
                      {!alert.isRead && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-base mb-2">{alert.message}</p>
                    <div className="flex flex-wrap gap-4 text-sm opacity-80">
                      <span>📍 {alert.location}</span>
                      {alert.percentage && (
                        <span
                          className={`font-medium ${
                            alert.percentage > 0
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {alert.percentage > 0 ? "↑" : "↓"}{" "}
                          {Math.abs(alert.percentage)}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-sm opacity-70 whitespace-nowrap">
                  {formatTimestamp(alert.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {alerts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔕</div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No Alerts Yet
            </h2>
            <p className="text-gray-500">
              You&apos;ll see price and demand alerts here when they occur.
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h3 className="font-semibold text-blue-800 mb-2">
            💡 About Alerts
          </h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>
              • <strong>Price Rise:</strong> Triggered when crop prices increase
              by more than 5%
            </li>
            <li>
              • <strong>Price Drop:</strong> Triggered when crop prices decrease
              by more than 3%
            </li>
            <li>
              • <strong>Demand Spike:</strong> Triggered when buyer demand
              increases significantly
            </li>
            <li>
              • <strong>Low Supply:</strong> Triggered when mandi arrivals are
              below average
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
