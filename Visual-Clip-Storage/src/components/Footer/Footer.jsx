import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Mail, Briefcase, Rss } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 border-b border-gray-700 pb-10">
          <div className="col-span-2 lg:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Visual Clip Storage Logo"
                className="w-12 h-12 rounded-xl shadow-lg border border-indigo-600 p-0.5 object-cover"
              />
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Visual Clip Storage
              </h2>
            </div>
            <p className="text-sm max-w-sm">
              Your dedicated platform for organizing and accessing visual media
              clips easily and efficiently.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-1 flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
            <Link
              to="/"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              About Us
            </Link>
            <Link
              to="/clips"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              Clips Library
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              Contact
            </Link>
          </div>

          <div className="col-span-1 lg:col-span-1 flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
            <Link
              to="/terms"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/faq"
              className="text-sm hover:text-indigo-400 transition duration-200"
            >
              FAQ
            </Link>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>

            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm hover:text-indigo-400 transition duration-200"
            >
              <Briefcase size={18} className="mr-2 text-indigo-500" /> Portfolio
            </a>

            <a
              href="mailto:youremail@example.com"
              className="flex items-center text-sm hover:text-indigo-400 transition duration-200"
            >
              <Mail size={18} className="mr-2 text-indigo-500" /> Email Support
            </a>

            <a
              href="https://yourblog.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-sm hover:text-indigo-400 transition duration-200"
            >
              <Rss size={18} className="mr-2 text-indigo-500" /> Blog
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-sm text-gray-500">
          <p className="order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {currentYear} Visual Clip Storage. All Rights Reserved.
          </p>

          <div className="order-1 sm:order-2 space-x-4"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
