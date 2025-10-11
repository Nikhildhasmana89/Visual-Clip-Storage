import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import Container from "../../container/Container";
import { parse } from "postcss";

export default function Post() {
  const [post, sretPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuther = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (Post) {
          sretPost(post);
        } else {
          navigate("/");
        }
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deletePost(post.featuredImage);
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8">
      <Container>
          <div className="w-full h-64 overflow-hidden">
          <img src="auth/logo.png" className="w-full h-full object-cover" alt={post.title} />
          {isAuther && (
            <div
            className="flex space-x-3"
            >
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor=""
                className="rounded-xl px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
                  Edit
                </Button>
              </Link>
              <Button bgColor="" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
          <div className="p-6 prose max-w-none">
            <h1>{post.title}</h1>
          </div>
          <div
          className=""
          >
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
