import { NavigationLink } from "./NavigationLink"




export default function Navbar({ onClick }: { onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
    return (
        <nav>
            <ul className="header-navigation-list">
                <NavigationLink direct={`/home`} onClick={onClick}>Home</NavigationLink>
                <NavigationLink direct={`/projects`} onClick={onClick}>Projects</NavigationLink>
                <NavigationLink direct={`/get-in-touch`} onClick={onClick}>Get In Touch</NavigationLink>
            </ul>
        </nav>
    )
}