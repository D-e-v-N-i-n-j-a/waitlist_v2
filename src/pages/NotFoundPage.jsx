import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <img src="/404_image.svg" alt="404 Image" className="mb-8" />
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for might have been removed or doesn't exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
  