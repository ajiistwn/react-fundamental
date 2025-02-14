import { Link, NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function changeActiveClass() {
    return isActive ? 'active' : '';
}

function RouteLayout() {
    return (
        <>
            <NavLink className={({ changeActiveClass })} to="/">Home</NavLink> |
            <NavLink className={({ changeActiveClass })} to="/about">About</NavLink> |
            <NavLink className={({ changeActiveClass })} to="/blogs">Blogs</NavLink>
            <p></p>
            <Outlet />

        </>
    );
}

export default RouteLayout;