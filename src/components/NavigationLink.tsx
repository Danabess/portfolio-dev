import { NavLink } from "react-router-dom"


export function NavigationLink({ direct, children, onClick }: { direct: string, children: any, onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {

    return (
        <>
            <li className="header-navigation-link">
                <NavLink to={direct} className="header-link p2" onClick={onClick}>{children}</NavLink>
            </li>
        </>)
}