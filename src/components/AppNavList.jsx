import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"

export default function AppNavList() {

    const { navMenu } = useGlobalContext()

    return (
        <>
            <nav>
                {navMenu.map((curLink, index) => (
                    <span key={index}>
                        <NavLink to={curLink.path}>{curLink.title}</NavLink>
                    </span>
                ))}
            </nav>
        </>
    );
}