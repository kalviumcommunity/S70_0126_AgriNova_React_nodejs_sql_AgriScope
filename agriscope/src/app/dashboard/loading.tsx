export default function DashboardLoading() {
  return (
    <main className="min-h-screen py-8 md:py-10 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <header className="mb-6 md:mb-8">
          <div className="h-7 bg-gray-200 rounded w-52 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded w-64 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-100 rounded-full w-20 animate-pulse"></div>
        </header>

        {/* Dashboard Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Prices Card Skeleton */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <div className="h-5 bg-gray-200 rounded w-28 mb-3 animate-pulse"></div>
            <div className="border-b border-gray-200 pb-2 mb-2 flex gap-8">
              <div className="h-3 bg-gray-100 rounded w-12 animate-pulse"></div>
              <div className="h-3 bg-gray-100 rounded w-12 animate-pulse"></div>
              <div className="h-3 bg-gray-100 rounded w-16 animate-pulse ml-auto"></div>
              <div className="h-3 bg-gray-100 rounded w-14 animate-pulse"></div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`flex items-center gap-6 py-2.5 border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/40"}`}
              >
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse ml-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
              </div>
            ))}
          </section>

          {/* Alerts Card Skeleton */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <div className="h-5 bg-gray-200 rounded w-28 mb-3 animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-50/60 rounded-md px-3 py-2.5 border-l-2 border-gray-200 animate-pulse"
                >
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-100 rounded w-12"></div>
                </div>
              ))}
            </div>
            <div className="h-4 bg-gray-100 rounded w-24 mx-auto mt-3 animate-pulse"></div>
          </section>

          {/* Demand Card Skeleton */}
          <section className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            <div className="h-5 bg-gray-200 rounded w-44 mb-4 animate-pulse"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-50/80 rounded-lg p-3 border border-gray-100 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-14 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="pt-2 border-t border-gray-200/80 space-y-1">
                    <div className="h-3 bg-gray-100 rounded w-20"></div>
                    <div className="h-3 bg-gray-100 rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="h-9 bg-green-100 rounded-lg w-40 animate-pulse"></div>
            </div>
          </section>
        </div>

        {/* Loading Message */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Loading your dashboard...
        </p>
      </div>
    </main>
  );
}
