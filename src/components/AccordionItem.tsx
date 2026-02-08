export default function AccordionItem({ children, title, selectedItemIndex, itemIndex, onClick }: { children: any, title: string, selectedItemIndex?: number | null, itemIndex: number, onClick?: React.MouseEventHandler<HTMLLIElement> }) {
    return (
        <li id="AccordItm" className={`accordion-item ${selectedItemIndex == itemIndex ? "open" : ""}`} onClick={onClick}>
            <div className="accordion-item__title">
                <h3>{title}</h3>
                <div className="accordion-plus">
                    <div className="plus__horizontal-line"></div>
                    <div className="plus__vertical-line"></div>
                </div>
            </div>
            <div className="accordion-item__content">
                <div className="accordion-item-wrapper">
                    <p className="p1">{children}</p>
                </div>
            </div>
        </li>
    )
}