import postsData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search'
import { useState, useEffect } from 'react'


function Homepage() {
    const [posts, setPosts] = useState(postsData)
    const [totalPosts, setTotalPosts] = useState(0)

    const onSearchChange = (search) => {        
        const filteredPosts = postsData.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length)
    }

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
            {
                posts.map((props, index) => {
                    return <Article {...props} key={index}  />
                })
            }
  
        </>
    )
}

export default Homepage