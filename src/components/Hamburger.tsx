import { useState } from "react"

import Navbar from "./Navbar"

export default function Hamburger() {
    const [isOpenBurger, setOpenBurger] = useState(false)

    return (
        <div className={`hamburger-menu ${isOpenBurger ? "open" : ""}`}>
            <div className="hamburger-inner" onClick={() => setOpenBurger(!isOpenBurger)}>
                <div className="hamburger-logo">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="hamburger-navigation">
                <div className="hamburger-navigation-inner">
                    <Navbar onClick={() => setOpenBurger(!isOpenBurger)} />
                </div>
            </div>
        </div >
    )
}