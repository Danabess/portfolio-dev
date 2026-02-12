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
                            <FormItem isRequired inputName="UserName">Name</FormItem>
                            <FormItem isRequired inputName="UserEmail">Email</FormItem>
                            <FormItem textArea inputName="Message">Message</FormItem>
                        </div>
                        <Button isPrimary ClassName="p2" onClick={() => { console.log('click') }}>Submit</Button>
                    </form>
                </div>
            </div>
            <div className="getintouch-links">
                <div className="getintouch-links-inner">
                    <div className="getintouch-social-links">
                        <h2>Social Links:</h2>
                        <SocialLinksList listClassName="getintouch-links-list" linkClassName="getintouch-link p1"></SocialLinksList>
                    </div>
                    <div className="getintouch-phone">
                        <h2>Phone Number:</h2>
                        <a href="#Phone" className="getintouch-link p1">+99 999-999-999</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default GetInTouch;