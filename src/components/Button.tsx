export default function Button(
    { isPrimary, children, ClassName, onClick, type, isDisabled = false }: { isPrimary?: boolean, children: any, ClassName?: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, type?: any, isDisabled?: boolean }
) {
    return (
        <button type={type} disabled={isDisabled} className={`${isPrimary ? "primary-btn" : "secondary-btn"} ${ClassName ? ClassName : ""}`} onClick={onClick ? onClick : undefined}>
            {children}
        </button>
    )
}