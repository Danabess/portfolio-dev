import { NavLink } from "react-router"

import Navbar from "./components/Navbar"


export default function Header() {

    return (
        <header className="header main-background">
            <div className="header-inner header-container">
                <div className="header-logo">
                    <h4>
                        <NavLink to="/">Nikita Sych</NavLink>
                    </h4>
                </div>

                <div className="header-navigation">
                    <Navbar />
                </div>
            </div>
        </header>
    )
}