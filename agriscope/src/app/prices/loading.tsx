export default function PricesLoading() {
  return (
    <main className="min-h-screen py-10 md:py-14 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header Skeleton */}
        <header className="mb-8">
          <div className="h-8 bg-gray-200 rounded-lg w-64 mb-3 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-80 mb-3 animate-pulse"></div>
          <div className="h-8 bg-green-100 rounded-full w-72 animate-pulse"></div>
        </header>

        {/* Table Skeleton */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-green-600 h-14"></div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-4 md:px-6 py-4 border-b border-gray-100"
            >
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse hidden sm:block"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse ml-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
