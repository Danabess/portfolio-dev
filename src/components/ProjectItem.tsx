import { NavLink } from "react-router-dom"

import Button from "./Button"
import { WebSiteName } from "../App"


export default function ProjectItem({ imgSrc, title, children, itemID }: { imgSrc: string, title: string, children: string, itemID: string }) {
    return (
        <article className="case-item">
            <div className="case-item-image">
                <img src={imgSrc} alt="Case Item" />
            </div>
            <div className="case-item-content">
                <h4 className="title-margin">{title}</h4>
                <p className="p3 paragraph-margin">{children}</p>
                <NavLink to={`${WebSiteName}/projects/${itemID}`}>
                    <Button isPrimary>Look More</Button>
                </NavLink>
            </div>
        </article>
    )
}