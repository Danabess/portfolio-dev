import Button from "./components/Button";
import FormItem from "./components/FormItem";
import SocialLinksList from "./components/SocialLinksList";


function GetInTouch() {
    return <section className="getintouch">
        <div className="getintouch-inner getintouch-container">
            <div className="getintouch-form">
                <div className="getintouch-form-inner">
                    <h2>GET IN TOUCH</h2>
                    <form action="#">
                        <div className="field-list">
                            <FormItem isRequired>Name</FormItem>
                            <FormItem isRequired>Email</FormItem>
                            <FormItem>Message</FormItem>
                        </div>
                        <Button isPrimary onClick={() => { console.log('click') }}>Submit</Button>
                    </form>
                </div>
            </div>
            <div className="getintouch-links">
                <div className="getintouch-links-inner">
                    <div className="getintouch-social-links">
                        <h2>Social Links:</h2>
                        <SocialLinksList linkClassName="getintouch-link"></SocialLinksList>
                    </div>
                    <div className="getintouch-phone">
                        <h2>Phone Number:</h2>
                        <a href="#Phone" className="getintouch-link">+99-999-999-999</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default GetInTouch;