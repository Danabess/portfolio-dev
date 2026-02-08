import { NavigationLink } from "./NavigationLink"


export default function Navbar() {
    return (
        <nav>
            <ul className="header-navigation-list">
                <NavigationLink direct="/">Home</NavigationLink>
                <NavigationLink direct="/projects">Projects</NavigationLink>
                <NavigationLink direct="/get-in-touch">Get In Touch</NavigationLink>
            </ul>
        </nav>
    )
}