import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layout/RouteLayout";

import Home from '../pages/index'
import About from "../pages/about"
import Blogs from "../pages/blogs";
import BlogDetail from "../pages/blogs/detail";

import { BlogsLoader, BlogDetailLoader } from "../apis/loaders";

import ErrorPage from "../components/ErrorPage";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RouteLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: BlogsLoader
            },
            {
                path: '/blogs/:id',
                element: <BlogDetail />,
                loader: BlogDetailLoader
            }
        ]
    }

])   