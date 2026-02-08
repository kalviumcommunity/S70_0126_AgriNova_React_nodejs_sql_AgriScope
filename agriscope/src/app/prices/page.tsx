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
    hour: "2-digit",
    minute: "2-digit",
  });

  // Empty state check
  if (!prices || prices.length === 0) {
    return (
      <main className="min-h-screen py-10 md:py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              📊 Live Mandi Prices
            </h1>
            <p className="text-gray-600">
              Real-time crop prices from mandis across India
            </p>
          </header>
          <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <p className="text-5xl mb-4" aria-hidden="true">🌾</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No prices available right now
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              We&apos;re working on fetching the latest mandi prices. Please check back in a few minutes.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-10 md:py-14 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            📊 Live Mandi Prices
          </h1>
          <p className="text-gray-600 text-base mb-3">
            Today&apos;s crop prices from major mandis across India
          </p>
          <p className="text-xs text-gray-500">
            Prices refresh automatically every 60 seconds · Last updated at {lastUpdated}
          </p>
        </header>

        {/* Prices Table */}
        <section aria-labelledby="prices-table-heading">
          <h2 id="prices-table-heading" className="sr-only">Mandi Prices Table</h2>
          
          {/* Desktop Table */}
          <div className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                      Crop
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                      Mandi
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                      State
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-right">
                      Min Price
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-right">
                      Max Price
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-right bg-green-700">
                      Modal Price
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide text-center">
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {prices.map((price, index) => (
                    <tr
                      key={price.id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50/60"} hover:bg-green-50 transition-colors`}
                    >
                      <td className="px-5 py-4 font-medium text-gray-900">
                        {price.crop}
                      </td>
                      <td className="px-5 py-4 text-gray-700">
                        {price.mandi}
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-sm">
                        {price.state}
                      </td>
                      <td className="px-5 py-4 text-right text-gray-600 tabular-nums">
                        ₹{price.minPrice.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-right text-gray-600 tabular-nums">
                        ₹{price.maxPrice.toLocaleString("en-IN")}
                      </td>
                      <td className="px-5 py-4 text-right tabular-nums bg-green-50/50">
                        <span className="font-semibold text-green-700">
                          ₹{price.modalPrice.toLocaleString("en-IN")}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center text-gray-500 text-sm">
                        /{price.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card Layout */}
          <div className="sm:hidden space-y-3">
            {prices.map((price) => (
              <div
                key={price.id}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{price.crop}</h3>
                    <p className="text-sm text-gray-500">
                      {price.mandi}, {price.state}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-700">
                      ₹{price.modalPrice.toLocaleString("en-IN")}
                    </p>
                    <p className="text-xs text-gray-500">per {price.unit}</p>
                  </div>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-gray-500">Min: </span>
                    <span className="text-gray-700 tabular-nums">₹{price.minPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Max: </span>
                    <span className="text-gray-700 tabular-nums">₹{price.maxPrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Understanding Prices - Info Box */}
        <aside className="mt-6 md:mt-8 bg-gray-100/80 border border-gray-200 rounded-lg p-4 md:p-5">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-medium text-gray-700 hover:text-gray-900">
              <span className="flex items-center gap-2">
                <span aria-hidden="true">💡</span>
                What do these prices mean?
              </span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <dl className="mt-4 space-y-3 text-sm text-gray-600 border-t border-gray-200 pt-4">
              <div>
                <dt className="font-medium text-gray-800 inline">Min Price: </dt>
                <dd className="inline">The lowest price at which the crop was sold today.</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-800 inline">Max Price: </dt>
                <dd className="inline">The highest price at which the crop was sold today.</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-800 inline">Modal Price: </dt>
                <dd className="inline">The most common selling price — <em>use this as your reference</em>.</dd>
              </div>
            </dl>
          </details>
        </aside>

        {/* Helpful tip for farmers */}
        <p className="mt-4 text-center text-xs text-gray-500">
          💡 Tip: Compare the Modal Price with your local buyer&apos;s offer to negotiate better.
        </p>
      </div>
    </main>
  );
}
