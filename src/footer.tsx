import SocialLinksList from "./components/SocialLinksList";


function Footer() {
    return (
        <footer className="footer main-background">
            <div className="footer-inner footer-container  p2">
                <div className="footer-links">
                    <div className="footer-social-links">
                        <h4>Social Links</h4>
                        <SocialLinksList linkClassName="footer-link"></SocialLinksList>
                    </div>
                    <div className="footer-contact-links">
                        <h4>Get In Touch</h4>
                        <div className="email-link">
                            <p>Email:</p>
                            <a href="#Email" className="footer-link">example@gmail.com</a>
                        </div>
                        <div className="phone-number">
                            <p>Phone number:</p>
                            <a href="#Phone" className="footer-link">+99 999-999-999</a>
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