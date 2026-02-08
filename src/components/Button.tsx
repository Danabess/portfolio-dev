export default function Button({ isPrimary, children, ClassName }: { isPrimary?: boolean, children: any, ClassName?: string }) {
    return (
        <button className={`${isPrimary ? "primary-btn" : "secondary-btn"} ${ClassName ? ClassName : ""}`}>
            {children}
        </button>
    )
}