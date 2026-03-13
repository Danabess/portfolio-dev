import { useState, useEffect } from "react"
import { NavLink } from "react-router"

import { WebSiteName } from "./App"

import Navbar from "./components/Navbar"
import Hamburger from "./components/Hamburger"


export default function Header() {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <header className="header main-background">
            <div className="header-inner header-container">
                <div className="header-logo">
                    <h4>
                        <NavLink to={`${WebSiteName}/home`}>Nikita Sych</NavLink>
                    </h4>
                </div>

                <div className="header-navigation">
                    {
                        windowSize > 900
                            ? <Navbar />
                            : <Hamburger />
                    }
                </div>
            </div>
        </header>
    )
}