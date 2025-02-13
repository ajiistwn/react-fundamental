import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layout/RouteLayout";

import Home from '../pages/index'
import About from "../pages/about"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RouteLayout/>,
        children:  [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    }
    
])   