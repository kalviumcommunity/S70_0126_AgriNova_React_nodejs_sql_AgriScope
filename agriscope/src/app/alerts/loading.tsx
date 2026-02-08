export default function AlertsLoading() {
  return (
    <main className="min-h-screen py-8 md:py-10 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header Skeleton */}
        <header className="mb-6 md:mb-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="h-7 bg-gray-200 rounded w-56 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-44 animate-pulse"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded-full w-14 animate-pulse"></div>
          </div>
        </header>

        {/* Legend Skeleton */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 mb-4">
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
        </div>

        {/* Alerts Skeleton */}
        <ul className="space-y-2.5">
          {[...Array(6)].map((_, i) => (
            <li
              key={i}
              className="bg-white rounded-lg border border-gray-100 border-l-2 border-l-gray-200 p-4 animate-pulse"
            >
              <div className="flex gap-3">
                {/* Icon */}
                <div className="w-5 h-5 bg-gray-200 rounded shrink-0"></div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Top row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-3 bg-gray-100 rounded w-16"></div>
                  </div>

                  {/* Message */}
                  <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>

                  {/* Metadata */}
                  <div className="flex gap-4">
                    <div className="h-3 bg-gray-100 rounded w-28"></div>
                    <div className="h-3 bg-gray-100 rounded w-12"></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Loading Message */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Loading alerts...
        </p>
      </div>
    </main>
  );
}
