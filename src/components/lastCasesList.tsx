import ProjectItem from './ProjectItem'

import { AllCases } from './AllCases'


export default function LastCasesList() {
    return (
        <>
            <div className="last-cases-list">
                <div className="all-cases-list">
                    {AllCases.map((item, i) => (
                        i < 3
                            ? <ProjectItem key={i} itemID={item.title} imgSrc={item.content} title={item.title}>{item.brief_description}</ProjectItem>
                            : undefined
                    ))}
                </div>
            </div>
        </>
    )
}