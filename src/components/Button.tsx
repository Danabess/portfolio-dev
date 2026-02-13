export default function Button(
    { isPrimary, children, ClassName, onClick }: { isPrimary?: boolean, children: any, ClassName?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }
) {
    return (
        <button className={`${isPrimary ? "primary-btn" : "secondary-btn"} ${ClassName ? ClassName : ""}`} onClick={onClick ? onClick : undefined}>
            {children}
        </button>
    )
}