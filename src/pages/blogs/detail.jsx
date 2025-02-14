import { useLoaderData } from 'react-router-dom';

function BlogDetail() {
    const blog = useLoaderData()

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
}

export default BlogDetail;