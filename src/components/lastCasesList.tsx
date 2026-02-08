import ProjectItem from './ProjectItem'

import caseImg_1 from "../assets/case-item_1.webp"
import caseImg_2 from "../assets/case-item_2.webp"
import caseImg_3 from "../assets/case-item_3.webp"


export default function LastCasesList() {
    return (
        <>
            <div className="last-cases-list">
                <ProjectItem imgSrc={caseImg_1} title="Video_name_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.</ProjectItem>
                <ProjectItem imgSrc={caseImg_2} title="Video_name_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.</ProjectItem>
                <ProjectItem imgSrc={caseImg_3} title="Video_name_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum.</ProjectItem>
            </div>
        </>
    )
}