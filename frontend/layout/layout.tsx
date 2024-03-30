import { Outlet } from "react-router-dom"
import Navbar from "../navbar"
import Topbar from "../topbar"

export const Layout = () => {
    return(
        <div className="flex flex-col min-h-screen max-h-fit">
            <Topbar/>
            <div className="grow flex flex-row">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    )
}