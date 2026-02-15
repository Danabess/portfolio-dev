import ProjectItem from "./ProjectItem"

import { AllCases } from "./AllCases"


export default function AllCasesList() {
    return (
        <div className="all-cases-list">
            {AllCases.map((item, i) => (
                <ProjectItem key={i} itemID={item.title} imgSrc={item.content} title={item.title}>{item.brief_description}</ProjectItem>
            ))}
        </div>
    )
}