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
      return "bg-emerald-50/70 border-emerald-300";
    case "price_drop":
      return "bg-rose-50/70 border-rose-300";
    case "demand_spike":
      return "bg-amber-50/70 border-amber-300";
    case "supply_low":
      return "bg-orange-50/70 border-orange-300";
    default:
      return "bg-gray-50 border-gray-300";
  }
}

function getAlertAccent(type: Alert["type"]) {
  switch (type) {
    case "price_rise":
      return "text-emerald-600";
    case "price_drop":
      return "text-rose-600";
    case "demand_spike":
      return "text-amber-600";
    case "supply_low":
      return "text-orange-600";
    default:
      return "text-gray-600";
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
    <main className="min-h-screen py-8 md:py-10 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5">
                🔔 Price & Demand Alerts
              </h1>
              <p className="text-sm text-gray-500">
                Market movements and buyer activity
              </p>
            </div>
            {unreadCount > 0 && (
              <span className="shrink-0 bg-gray-800 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                {unreadCount} new
              </span>
            )}
          </div>
        </header>

        {/* Alert Legend - Collapsible */}
        <details className="bg-white rounded-lg border border-gray-100 mb-5">
          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-gray-600 flex items-center justify-between list-none">
            <span>Alert Types</span>
            <span className="text-gray-400 text-xs">▼</span>
          </summary>
          <div className="px-4 pb-3 pt-1 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Price Rise
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
              Price Drop
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              Demand Spike
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              Low Supply
            </span>
          </div>
        </details>

        {/* Alerts List */}
        <ul className="space-y-2.5">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`rounded-lg border-l-2 border bg-white p-4 ${getAlertStyle(alert.type)} ${
                !alert.isRead ? "ring-1 ring-blue-200" : ""
              }`}
            >
              <div className="flex gap-3">
                {/* Icon */}
                <span className={`text-lg shrink-0 ${getAlertAccent(alert.type)}`} aria-hidden="true">
                  {getAlertIcon(alert.type)}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Top row: Crop + Badge + Timestamp */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <h2 className="font-semibold text-gray-900 truncate">
                        {alert.crop}
                      </h2>
                      {!alert.isRead && (
                        <span className="shrink-0 bg-blue-100 text-blue-600 text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <time className="text-xs text-gray-400 shrink-0">
                      {formatTimestamp(alert.timestamp)}
                    </time>
                  </div>

                  {/* Message */}
                  <p className="text-sm text-gray-600 leading-snug mb-2">
                    {alert.message}
                  </p>

                  {/* Metadata row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                    <span className="text-gray-400">
                      📍 {alert.location}
                    </span>
                    {alert.percentage && (
                      <span
                        className={`font-medium ${
                          alert.percentage > 0
                            ? "text-emerald-600"
                            : "text-rose-600"
                        }`}
                      >
                        {alert.percentage > 0 ? "↑" : "↓"}{" "}
                        {Math.abs(alert.percentage)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {alerts.length === 0 && (
          <div className="text-center py-14">
            <div className="text-5xl mb-3">🔕</div>
            <h2 className="text-lg font-semibold text-gray-700 mb-1">
              No Alerts Yet
            </h2>
            <p className="text-sm text-gray-500">
              You&apos;ll see price and demand alerts here when they occur.
            </p>
          </div>
        )}

        {/* Info Box */}
        <aside className="mt-6 bg-gray-50 border border-gray-100 rounded-lg p-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-medium text-gray-600">
              <span>💡 About Alerts</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs">▼</span>
            </summary>
            <ul className="mt-3 text-gray-500 text-xs space-y-1.5 leading-relaxed">
              <li>
                <strong className="text-gray-600">Price Rise:</strong> Triggered when prices increase by more than 5%
              </li>
              <li>
                <strong className="text-gray-600">Price Drop:</strong> Triggered when prices decrease by more than 3%
              </li>
              <li>
                <strong className="text-gray-600">Demand Spike:</strong> Triggered when buyer demand increases significantly
              </li>
              <li>
                <strong className="text-gray-600">Low Supply:</strong> Triggered when mandi arrivals are below average
              </li>
            </ul>
          </details>
        </aside>
      </div>
    </main>
  );
}
