import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../../appwrite/config";
function PostCard({ id, title, featuredImage }) {
  return (
    <div>
      <Link to={`${id}`}>
        <div
          className="rounded-xl overflow-hidden shadow-md bg-white 
                   dark:bg-gray-900 hover:shadow-lg transition"
        >
          <div className="w-full h-48 overflow-hidden">
            <img
              src={AppwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2
            className="text-lg font-semibold text-gray-800 dark:text-gray-100 
                       group-hover:text-blue-600 line-clamp-2"
          >
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
