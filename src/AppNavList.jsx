import { NavLink } from "react-router-dom";

export default function AppNavList() {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/ListPage'>List</NavLink>
        </>
    );
}