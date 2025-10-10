import React, { useEffect, useState } from 'react'
import appwriteService from '../../appwrite/config'
import { Container } from 'lucide-react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  return (
    <div className="py-8 bg-gray-50 min-h-screen">
  <Container>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Latest Posts
    </h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.$id}
          className="transition transform hover:scale-[1.02] hover:shadow-lg duration-300"
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  </Container>
</div>

  )
}

export default AllPosts
