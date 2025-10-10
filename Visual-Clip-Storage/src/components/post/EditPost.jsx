import React, { use, useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "./PostForm";
function EditPost() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((posts) => {
        if (post) {
          setPosts(posts);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);
  return posts ? (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <PostForm post={posts} />
    </div>
  ) : null;
}

export default EditPost;
