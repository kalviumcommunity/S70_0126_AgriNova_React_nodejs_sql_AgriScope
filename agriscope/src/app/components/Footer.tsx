export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">🌾 AgriScope</h3>
            <p className="text-green-200 text-sm">
              Empowering farmers with transparent price and demand insights for
              fairer price realization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-green-200 text-sm">
              <li>
                <a href="/prices" className="hover:text-white">
                  Mandi Prices
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/demand" className="hover:text-white">
                  Submit Demand
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-green-200 text-sm">
              For support and queries:
              <br />
              support@agriscope.in
            </p>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-300 text-sm">
          © 2026 AgriScope. Built for Indian Farmers.
        </div>
      </div>
    </footer>
  );
}
