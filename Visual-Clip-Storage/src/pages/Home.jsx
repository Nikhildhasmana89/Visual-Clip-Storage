import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container } from "lucide-react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
  return (
    <div className="flex w-full items-center justify-center py-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          Login to read posts
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Your feed is waiting for you.
        </p>
      </div>
    </div>
  );
}

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              className="transition transform hover:scale-[1.02] hover:shadow-lg duration-300"
              key={post.$id}
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
