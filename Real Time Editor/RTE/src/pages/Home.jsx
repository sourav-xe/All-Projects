import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../component'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-[60vh] flex items-center justify-center py-10 bg-gray-50">
                <Container>
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-700 mb-4">No Posts Yet</h1>
                        <p className="text-gray-500 mb-6">You need to login to see the latest posts. Start sharing and exploring once you're signed in.</p>
                        <a href="/login" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                          No Posts Found
                        </a>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-10 bg-white">
            <Container>
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Latest Posts</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
