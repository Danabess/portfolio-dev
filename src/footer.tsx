function Footer() {

    const SocialLinksList = [
        { name: "LinkedIn", href: "#LinkedIn" },
        { name: "Instagram", href: "#Instagram" },
        { name: "Telegram", href: "#Telegram" },
        { name: "Twitter", href: "#Twitter" },
        { name: "WhatsApp", href: "#WhatsApp" },
    ]

    return (
        <footer className="footer main-background">
            <div className="footer-inner footer-container  p2">
                <div className="footer-links">
                    <div className="footer-social-links">
                        <h4>Social Links</h4>
                        <ul>
                            {SocialLinksList.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <a href={item.href} className="footer-link">{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer-contact-links">
                        <h4>Get In Touch</h4>
                        <div className="email-link">
                            <p>Email:</p>
                            <a href="#Email" className="footer-link">example@gmail.com</a>
                        </div>
                        <div className="phone-number">
                            <p>Phone number:</p>
                            <a href="#Phone" className="footer-link">+99-999-999-999</a>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                    <h3>Nikita Sych</h3>
                    <p>@Coopyright 2026</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;