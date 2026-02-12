const SocialLinks = [
    { name: "LinkedIn", href: "#LinkedIn" },
    { name: "Instagram", href: "#Instagram" },
    { name: "Telegram", href: "#Telegram" },
    { name: "Twitter", href: "#Twitter" },
    { name: "WhatsApp", href: "#WhatsApp" },
]

export default function SocialLinksList({ listClassName, linkClassName }: { listClassName?: string, linkClassName?: string }) {
    return (
        <ul className={listClassName}>
            {SocialLinks.map((item, i) => {
                return (
                    <li key={i}>
                        <a href={item.href} className={`${linkClassName}`}>{item.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}