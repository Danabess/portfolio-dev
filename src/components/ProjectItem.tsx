import Button from "./Button"

export default function ProjectItem({ imgSrc, title, children }: { imgSrc: string, title: string, children: string }) {
    return (
        <article className="case-item">
            <div className="case-item-image">
                <img src={imgSrc} alt="Case Item" />
            </div>
            <div className="case-item-content">
                <h4 className="title-margin">{title}</h4>
                <p className="p3 paragraph-margin">{children}</p>
                <Button isPrimary>Look More</Button>
            </div>
        </article>
    )
}