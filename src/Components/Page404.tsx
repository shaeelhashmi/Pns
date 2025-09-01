
export default function Page404() {
  return (
    <div className="bg-gradient-to-r from-[#047957] via-green-400 to-[#047957] p-1 rounded-xl shadow-lg my-20">
    <div className="bg-white rounded-xl px-12 py-10 flex flex-col items-center ">
      <h1 className="text-7xl font-bold text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-[#047957]">Page Not Found</h2>
      <p className="text-black mb-6 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="inline-block mt-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#047957] via-green-400 to-[#047957] hover:from-green-400 hover:to-[#047957] transition-all duration-200">
        Go Home
      </a>
    </div>
  </div>
  )
}
