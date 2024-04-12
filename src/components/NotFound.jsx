const NotFound = () => {
  return (
    <div className="center h-screen">
      <div className="text-center">
        <div className="mb-10 text-9xl font-extrabold text-gray-600">
          <h1 className="text-3xl">Page Not Found</h1>
          <p>404</p>
        </div>
        <button className="button bg-gray-200 text-black font-semibold text-md border-gray-100 hover:bg-gray-300 hover:border-gray-400 duration-500 dark:text-white">Go To Home</button>
      </div>
    </div>
  )
}

export default NotFound
