import { useState } from "react";

import AccordionItem from "./AccordionItem"


const accordionItemsList = [
    { title: "Brief & Research", description: "I begin by understanding the project’s purpose, target audience, and platform. I analyze references, tone, and style to set a clear creative direction." },
    { title: "Story & Structure", description: "I shape the narrative by defining pacing, rhythm, and visual flow. This step focuses on storytelling, timing, and how motion and edits support the message." },
    { title: "Motion & Editing", description: "I design and animate motion graphics while editing the footage. Visuals, transitions, typography, and sound are combined to create a cohesive and engaging result." },
    { title: "Refinement & Delivery", description: "I polish the final piece through revisions, fine-tuning motion, color, and audio. The project is then exported in optimized formats, ready for publishing." },
]

export default function Accordion() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    function ToggleSelectAccordionItem(i: any) {
        if (selectedIndex == i) {
            return setSelectedIndex(null)
        }

        setSelectedIndex(i);
    }

    return (
        <ul className="accordion-items-list">
            {accordionItemsList.map((item, i) => {
                return (
                    <AccordionItem key={i} title={`0${i + 1}. ${item.title}`} selectedItemIndex={selectedIndex} itemIndex={i} onClick={() => ToggleSelectAccordionItem(i)}>{item.description}</AccordionItem>
                )
            })}
        </ul>
    )
}