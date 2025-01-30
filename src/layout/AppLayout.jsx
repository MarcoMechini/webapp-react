import { Outlet } from "react-router-dom";
import AppNavList from "../components/AppNavList";

export default function AppLayout() {
    return (
        <>
            <AppNavList />
            <Outlet />
        </>
    );
}