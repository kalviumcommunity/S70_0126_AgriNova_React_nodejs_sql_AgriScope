import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            🌾 AgriScope
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1 md:space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/prices"
              className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-green-600 transition-colors"
            >
              Prices
            </Link>
            <Link
              href="/dashboard"
              className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-green-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/demand"
              className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-green-600 transition-colors"
            >
              Demand
            </Link>
            <Link
              href="/alerts"
              className="px-3 py-2 rounded-md text-sm md:text-base font-medium hover:bg-green-600 transition-colors"
            >
              Alerts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
