import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
function Blogs() {
    const blogs = useLoaderData();
    return (
        <div>
            <h1>My Blogs Posts</h1>
            <ul>
                {blogs?.map((blog, index) => (
                    <li key={index}>{
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    }</li>
                ))}
            </ul>
        </div>
    );
}

export default Blogs; 