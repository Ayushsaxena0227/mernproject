import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome , FaRegListAlt} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6"

export const Adminlayout = ()=>{
    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUser />Users</NavLink></li>
                        <li><NavLink to="/admin/contact"><FaMessage/>Contact</NavLink></li>
                        <li><NavLink to="/admin/services"><FaRegListAlt/>Services</NavLink></li>
                        <li><NavLink to="/admin/home"><FaHome/>Home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
    </>
}
