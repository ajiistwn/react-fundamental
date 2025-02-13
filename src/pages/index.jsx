import postsData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search'
import { useState, useEffect } from 'react'


function Homepage() {
    const [posts, setPosts] = useState(postsData)
    const [totalPosts, setTotalPosts] = useState(0)
    const [externalPosts, setExternalPosts] = useState([])

    const onSearchChange = (search) => {        
        const filteredPosts = postsData.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setExternalPosts(json))
    }, [])

    useEffect(() => {
        console.log('new search posts')

    }, [posts])

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
            {
                posts.map((props, index) => {
                    return <Article {...props} key={index}  />
                })
            }
            <h2>External Posts</h2>
            {
                externalPosts.map((post, index) => {
                    return <div key={index}>- {post.title}</div>
                })
            }
        </>
    )
}

export default Homepage