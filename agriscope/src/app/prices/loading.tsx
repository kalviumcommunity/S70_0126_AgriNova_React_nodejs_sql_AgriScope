export default function PricesLoading() {
  return (
    <main className="min-h-screen py-10 md:py-14 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header Skeleton */}
        <header className="mb-6 md:mb-8">
          <div className="h-8 bg-gray-200 rounded-lg w-56 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-72 mb-3 animate-pulse"></div>
          <div className="h-3 bg-gray-100 rounded w-64 animate-pulse"></div>
        </header>

        {/* Desktop Table Skeleton */}
        <section className="hidden sm:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header Row */}
          <div className="bg-green-600 h-12 flex items-center px-5 gap-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-3 bg-green-500 rounded w-16 animate-pulse"></div>
            ))}
          </div>
          {/* Data Rows */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`flex items-center gap-6 px-5 py-4 border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
            >
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse ml-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-4 bg-green-100 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-14 animate-pulse"></div>
            </div>
          ))}
        </section>

        {/* Mobile Card Skeleton */}
        <div className="sm:hidden space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm animate-pulse">
              <div className="flex justify-between mb-3">
                <div>
                  <div className="h-5 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-32"></div>
                </div>
                <div className="text-right">
                  <div className="h-6 bg-green-100 rounded w-20 mb-1"></div>
                  <div className="h-3 bg-gray-100 rounded w-16"></div>
                </div>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-100">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box Skeleton */}
        <div className="mt-6 md:mt-8 bg-gray-100/80 border border-gray-200 rounded-lg p-4">
          <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
        </div>

        {/* Loading Message */}
        <p className="mt-6 text-center text-sm text-gray-500">
          🌾 Fetching latest prices from mandis...
        </p>
      </div>
    </main>
  );
}
