import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

import { WebSiteName } from "./App"

import Button from "./components/Button"
import LastCasesList from './components/lastCasesList'
import Accordion from "./components/Accordion"

import heroImg from "./assets/hero-main-img.jpg"


export default function Home() {
    return (
        <>
            <section className="hero main-background">
                <div className="hero-inner hero-container">
                    <div className="hero-title">
                        <h1 className='light-heading'>
                            2D Animations. Video Editing. Motion Design.
                        </h1>
                        <Link to='MyApproach' smooth={true} duration={1000}>
                            <Button ClassName='p2 uppercase' isPrimary>More About Approach</Button>
                        </Link>
                    </div>
                    <div className="hero-image">
                        <img src={heroImg} alt="HeroImage" />
                    </div>
                </div>
            </section>

            <section className='small-padding-section motivation secondary-background'>
                <div className="motivation-inner motivation-container">
                    <h3>“Every frame has purpose.Emotion through editing.Motion with meaning.”</h3>
                </div>
            </section>

            <section className='last-cases'>
                <div className="last-cases-inner last-cases-container">
                    <div className="last-cases-title">
                        <h1>Last Cases</h1>
                    </div>
                    <div className="last-cases-content">
                        <LastCasesList />
                    </div>
                </div>
            </section>

            <section id='MyApproach' className='approach secondary-background'>
                <div className="approach-inner approach-container">
                    <div className="approach-title">
                        <h1>My <br /> Approach</h1>
                    </div>

                    <div className="approach-subtitle">
                        <p className='p2'>
                            I take a personal approach to every project, ensuring that I understand your brand, your audience, and your objectives. With data-driven insights, I enhance projects with research and strategy. <br /> <br />
                            From brand identities to digital experiences, I create all types of work including campaigns, websites, and comprehensive brand systems. Whether it's a focused project or an extensive brand overhaul, I'm here to help.
                        </p>
                    </div>
                </div>
            </section>

            <section className='workflow'>
                <div className="workflow-inner workflow-container">
                    <h1 className='uppercase workflow-title'>My Workflow</h1>
                    <div className="workflow-content">
                        <Accordion />
                    </div>
                </div>
            </section>

            <section className="contact secondary-background">
                <div className="contact-inner contant-container">
                    <div className="contact-image">
                        <img src={heroImg} alt="ContactImage" />
                    </div>
                    <div className="contact-content">
                        <div className="contact-text">
                            <h1>Get In Touch</h1>
                            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum. Proin pellentesque posuere dolor eget iaculis. Mauris et massa elit. In malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec dapibus orci. Cras maximus interdum est non interdum. Proin pellentesque posuere dolor eget</p>
                            <NavLink to={`${WebSiteName}/get-in-touch`}>
                                <Button ClassName='p2'>Contact Me</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}