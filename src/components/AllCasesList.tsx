import ProjectItem from "./ProjectItem"

import caseImg_1 from "../assets/case-item_1.webp"
import caseImg_2 from "../assets/case-item_2.webp"
import caseImg_3 from "../assets/case-item_3.webp"
import caseImg_4 from "../assets/case-item_4.webp"


export const AllCases = [
    { title: "Video_name_1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.", image: caseImg_1 },
    { title: "Video_name_2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.", image: caseImg_2 },
    { title: "Video_name_3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.", image: caseImg_3 },
    { title: "Video_name_4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.", image: caseImg_4 },
    { title: "Video_name_5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.", image: caseImg_2 },
]

export default function AllCasesList() {
    return (
        <div className="all-cases-list">
            {AllCases.map((item, i) => (
                <ProjectItem key={i} itemID={item.title} imgSrc={item.image} title={item.title}>{item.description}</ProjectItem>
            ))}
        </div>
    )
}