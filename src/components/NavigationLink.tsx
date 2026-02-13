import { NavLink } from "react-router-dom"


export function NavigationLink({ direct, children, }: { direct: string, children: any, }) {

    return (
        <>
            <li className="header-navigation-link">
                <NavLink to={direct} className="header-link p2">{children}</NavLink>
            </li>
        </>)
}