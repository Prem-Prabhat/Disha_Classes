import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-sky-500 text-white w-screen h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-200 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-800 hover:text-blue-100 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
