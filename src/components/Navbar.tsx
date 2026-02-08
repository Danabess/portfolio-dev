import { NavigationLink } from "./NavigationLink"

import { WebSiteName } from "../App"


export default function Navbar() {
    return (
        <nav>
            <ul className="header-navigation-list">
                <NavigationLink direct={`${WebSiteName}/`}>Home</NavigationLink>
                <NavigationLink direct={`${WebSiteName}/projects`}>Projects</NavigationLink>
                <NavigationLink direct={`${WebSiteName}/get-in-touch`}>Get In Touch</NavigationLink>
            </ul>
        </nav>
    )
}