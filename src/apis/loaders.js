export const BlogsLoader = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
}

export const BlogDetailLoader = ({ params }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
}