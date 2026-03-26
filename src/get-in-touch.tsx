import { useState } from "react";

import Button from "./components/Button";
import FormItem from "./components/FormItem";
import SocialLinksList from "./components/SocialLinksList";



export default function GetInTouch() {
    const MessageStates = {
        "btnOriginal": "Send Message",
        "btnSuccess": "Message Sent",
        "btnLoading": "Sending...",
        "statusSuccess": "Message sent successfully!",
        "statusFail": "Failed to send message!",
        "statusError": "Something went wrong! Try again later."
    }
    const timeoutDelay = 3000;

    const [result, setResult] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(false)
    const [submitBtnText, setSubmitBtnText] = useState(MessageStates.btnOriginal)

    function FormReset(submitForm: HTMLFormElement) {
        submitForm.reset()
        setInputName("")
        setInputEmail("")
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();

        let sendingSuccess = false;

        setIsDisabled(true);
        setSubmitBtnText(MessageStates.btnLoading);

        const formData = new FormData(event.target);
        formData.append("access_key", "3136a2bf-ce4c-4ed5-9fa4-8aa55dcc4197");

        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
            .then(
                async (response) => {
                    const data = await response.json();

                    if (data.success) {
                        sendingSuccess = true

                        setTimeout(() => {
                            setResult(MessageStates.statusSuccess)
                            setSubmitBtnText(MessageStates.btnSuccess)
                        }, timeoutDelay)
                    } else {
                        setTimeout(() => {
                            setIsDisabled(false)
                            setResult(MessageStates.statusFail)
                            setSubmitBtnText(MessageStates.btnOriginal)
                        }, timeoutDelay)
                    }
                })
            .catch(
                (error) => {
                    console.log(error)

                    setTimeout(() => {
                        setIsDisabled(false)
                        setSubmitBtnText(MessageStates.btnOriginal)
                        setResult(MessageStates.statusError)
                    }, timeoutDelay)
                })
            .then(
                () => {
                    setTimeout(() => {
                        if (sendingSuccess) {
                            FormReset(event.target)
                        } else {
                            setIsDisabled(false)
                        }
                    }, timeoutDelay)
                });
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
                        <Button isDisabled={isDisabled} type="submit" isPrimary ClassName="p2">{submitBtnText}</Button>
                        <p className="p2" style={{ paddingTop: "1rem" }}>{result}</p>
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