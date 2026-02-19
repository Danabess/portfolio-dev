import { NavigationLink } from "./NavigationLink"

import { WebSiteName } from "../App"


export default function Navbar({ onClick }: { onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
    return (
        <nav>
            <ul className="header-navigation-list">
                <NavigationLink direct={`${WebSiteName}/home`} onClick={onClick}>Home</NavigationLink>
                <NavigationLink direct={`${WebSiteName}/projects`} onClick={onClick}>Projects</NavigationLink>
                <NavigationLink direct={`${WebSiteName}/get-in-touch`} onClick={onClick}>Get In Touch</NavigationLink>
            </ul>
        </nav>
    )
}