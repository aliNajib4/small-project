const NotFound = () => {
  return (
    <div className="center h-screen">
      <div className="text-center">
        <div className="mb-10 text-9xl font-extrabold text-gray-600">
          <h1 className="text-3xl">Page Not Found</h1>
          <p>404</p>
        </div>
        <button className="button text-md border-gray-100 bg-gray-200 font-semibold text-black duration-500 hover:border-gray-400 hover:bg-gray-300 dark:text-white">
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
