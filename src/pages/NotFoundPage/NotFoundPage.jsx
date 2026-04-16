import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/images/error-image.png";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#244d3fFF] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 items-center gap-10">
        <div className="text-white space-y-5 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
            Oops
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            404
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold">Page not found</h2>

          <p className="text-emerald-100 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl bg-white text-[#244d3fFF] font-semibold hover:scale-105 transition"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-[#244d3fFF] transition"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={errorImg}
            alt="Error illustration"
            className="max-w-xs md:max-w-md w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
