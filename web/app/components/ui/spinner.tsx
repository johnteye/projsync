export function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-projsync-green border-r-projsync-green animate-spin"></div>
        </div>
        <span className="mt-4 text-gray-600 font-medium">Loading...</span>
      </div>
    </div>
  );
}

export function SpinnerSmall() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="relative w-5 h-5">
        <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-projsync-green border-r-projsync-green animate-spin"></div>
      </div>
      <span className="text-sm text-gray-600">Loading...</span>
    </div>
  );
}
