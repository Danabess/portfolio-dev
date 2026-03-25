export default function Button(
    { isPrimary, children, ClassName, onClick, type }: { isPrimary?: boolean, children: any, ClassName?: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, type?: any }
) {
    return (
        <button type={type} className={`${isPrimary ? "primary-btn" : "secondary-btn"} ${ClassName ? ClassName : ""}`} onClick={onClick ? onClick : undefined}>
            {children}
        </button>
    )
}