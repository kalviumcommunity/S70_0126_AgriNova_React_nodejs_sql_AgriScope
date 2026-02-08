// ISR - Incremental Static Regeneration (revalidate every 60 seconds)
export const revalidate = 60;

// Types
interface Price {
  id: number;
  crop: string;
  mandi: string;
  state: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  unit: string;
  updatedAt: string;
}

// Mock data for demonstration (replace with actual API call)
async function getPrices(): Promise<Price[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In production, fetch from:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prices`);
  // return res.json();

  return [
    {
      id: 1,
      crop: "Wheat",
      mandi: "Azadpur",
      state: "Delhi",
      minPrice: 2100,
      maxPrice: 2400,
      modalPrice: 2250,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      crop: "Rice (Basmati)",
      mandi: "Karnal",
      state: "Haryana",
      minPrice: 3500,
      maxPrice: 4200,
      modalPrice: 3850,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      crop: "Tomato",
      mandi: "Vashi",
      state: "Maharashtra",
      minPrice: 1500,
      maxPrice: 2200,
      modalPrice: 1800,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      crop: "Onion",
      mandi: "Lasalgaon",
      state: "Maharashtra",
      minPrice: 1200,
      maxPrice: 1800,
      modalPrice: 1500,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 5,
      crop: "Potato",
      mandi: "Agra",
      state: "Uttar Pradesh",
      minPrice: 800,
      maxPrice: 1200,
      modalPrice: 1000,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 6,
      crop: "Soybean",
      mandi: "Indore",
      state: "Madhya Pradesh",
      minPrice: 4500,
      maxPrice: 5200,
      modalPrice: 4850,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 7,
      crop: "Cotton",
      mandi: "Rajkot",
      state: "Gujarat",
      minPrice: 6000,
      maxPrice: 7200,
      modalPrice: 6600,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
    {
      id: 8,
      crop: "Maize",
      mandi: "Davangere",
      state: "Karnataka",
      minPrice: 1800,
      maxPrice: 2200,
      modalPrice: 2000,
      unit: "Quintal",
      updatedAt: new Date().toISOString(),
    },
  ];
}

export default async function PricesPage() {
  const prices = await getPrices();
  const lastUpdated = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <main className="min-h-screen py-10 md:py-14 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            📊 Live Mandi Prices
          </h1>
          <p className="text-gray-700 text-base">
            Real-time crop prices from mandis across India
          </p>
          <div className="mt-3 text-sm text-green-700 bg-green-50 border border-green-100 inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <span aria-hidden="true">🔄</span>
            <span>Auto-refreshes every 60 seconds</span>
            <span className="text-green-600">•</span>
            <span>Last updated: {lastUpdated}</span>
          </div>
        </header>

        {/* Price Table */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-4 text-left text-sm font-semibold">
                    Crop
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-left text-sm font-semibold">
                    Mandi
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-left text-sm font-semibold hidden sm:table-cell">
                    State
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-right text-sm font-semibold">
                    Min (₹)
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-right text-sm font-semibold">
                    Max (₹)
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-right text-sm font-semibold">
                    Modal (₹)
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-center text-sm font-semibold hidden md:table-cell">
                    Unit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {prices.map((price, index) => (
                  <tr
                    key={price.id}
                    className={`${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"} hover:bg-green-50/50`}
                  >
                    <td className="px-4 md:px-6 py-4 font-medium text-gray-900">
                      {price.crop}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-gray-600">{price.mandi}</td>
                    <td className="px-4 md:px-6 py-4 text-gray-600 hidden sm:table-cell">{price.state}</td>
                    <td className="px-4 md:px-6 py-4 text-right text-gray-600 tabular-nums">
                      ₹{price.minPrice.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right text-gray-600 tabular-nums">
                      ₹{price.maxPrice.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right font-semibold text-green-700 tabular-nums">
                      ₹{price.modalPrice.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-gray-500 text-sm hidden md:table-cell">
                      {price.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Info Box */}
        <aside className="mt-8 bg-amber-50/70 border border-amber-200 rounded-xl p-5 md:p-6">
          <h2 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <span aria-hidden="true">ℹ️</span>
            Understanding Prices
          </h2>
          <ul className="text-amber-800 space-y-2 text-sm leading-relaxed">
            <li>
              <strong className="text-amber-900">Min Price:</strong> Lowest traded price in the mandi today
            </li>
            <li>
              <strong className="text-amber-900">Max Price:</strong> Highest traded price in the mandi today
            </li>
            <li>
              <strong className="text-amber-900">Modal Price:</strong> Most common transaction price (recommended reference)
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
