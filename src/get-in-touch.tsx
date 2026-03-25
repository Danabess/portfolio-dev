import { useEffect, useState } from "react";

import Button from "./components/Button";
import FormItem from "./components/FormItem";
import SocialLinksList from "./components/SocialLinksList";
import Page404 from "./page404";
import SuccessForm from "./successForm";


export default function GetInTouch() {
    const [result, setResult] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");


    const onSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "3136a2bf-ce4c-4ed5-9fa4-8aa55dcc4197");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");

        console.log(data.success)
    };


    return <section className="getintouch">
        <div className="getintouch-inner getintouch-container">
            <div className="getintouch-form">
                <div className="getintouch-form-inner">
                    <h2>GET IN TOUCH</h2>
                    <form onSubmit={onSubmit} id="InputForm">
                        <div className="field-list">
                            <FormItem isRequired inputName="Name" inputValue={inputName} onInput={(e: any) => setInputName(e.target.value)}>Name</FormItem>
                            <FormItem isRequired inputName="replyto" inputValue={inputEmail} onInput={(e: any) => setInputEmail(e.target.value)}>Email</FormItem>
                            <FormItem textArea inputName="Message">Message</FormItem>

                            <input type="hidden" name="from_name" value={inputName} />
                            <input type="hidden" name="email" value="jesterbloods@gmail.com"></input>
                            <input type="hidden" name="subject" value="You recieved new message from your Portfolio webpage"></input>
                        </div>
                        <Button type="submit" isPrimary ClassName="p2">Submit</Button>
                        <p className="p2">{result}</p>
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
        </div >
    </section >
}