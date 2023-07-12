import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'
const Hero = (props) => {
    const [displayinfo, setdisplayinfo] = useState("")
    const [isdisplay, setisdisplay] = useState(false)
    const [sent, setsent] = useState(false)
    const displayabout = (button) => {
        setisdisplay(!isdisplay)
        setdisplayinfo(button)
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_688u0za', 'template_7sss1ol', form.current, 'airPSi7ELLKj01Y7i')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setsent(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        const clearpopup = setTimeout(() => {
            setsent(false)
        }, 3000);

    }, [sent])
    return (
        <section className="hero-sec">
            <div className="hero-container">
                <div className="short-intro">
                    <div className="topimg-intro">
                    </div>
                    <h2 id='name'>HI, I'm Mouhib Yassine</h2>
                    <h2 id='major'>a <span>Programmer</span> From <span>Morocco</span>.</h2>

                </div>
                <div className="full-intro" ref={props.about}>
                    <div className="bodyimg-intro">
                        <img src="https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_1280.jpg"></img>
                    </div>
                    <div className="about">
                        <div className="about-header">
                            <h2>About me</h2>
                            <h3>My name is Yassine Mouhib, and I discovered my love for programming in 2021. Ever since I delved into the world of coding, I have been captivated by its endless possibilities. My passion lies in using programming as a tool to create innovative and transformative solutions. I am constantly driven by the excitement of turning ideas into reality, pushing the boundaries of what can be achieved through technology. Programming has become more than just a skill for me; it has become a way of expressing my creativity and problem-solving abilities. With every line of code I write, I strive to build something new and meaningful, contributing to the ever-evolving landscape of software development.</h3>
                        </div>
                        <div className="about-skills">
                            <div className="skillbox1">
                                <button onClick={() => displayabout('education')}>Education</button>
                                <h3 className={`${displayinfo == "education" && isdisplay ? "show" : "hide"} hide`}></h3>
                            </div>
                            <div className="skillbox2">
                                <button onClick={() => displayabout('activities')}>Activites</button>
                                <h3 className={`${displayinfo == "activities" && isdisplay ? "show" : "hide"} hide`}></h3>
                            </div>
                            <div className="skillbox3">
                                <button onClick={() => displayabout('knowledge')}>Knowledge</button>
                                <h3 className={`${displayinfo == "knowledge" && isdisplay ? "show" : "hide"} hide`}></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services" ref={props.services}>
                    <div className="servicebox" id="servicebox">
                        <img src="https://cdn-icons-png.flaticon.com/128/8858/8858413.png"></img>
                        <h2>FrontEnd Developpement</h2>
                        <h3>I offer top-notch frontend website services, combining sleek design and optimal user experience. From captivating layouts to responsive designs, I create visually appealing and high-performance websites.</h3>
                    </div>
                    <div className="servicebox" id="servicebox">
                        <img src="https://cdn-icons-png.flaticon.com/128/5305/5305951.png"></img>
                        <h2>BackEnd Developpement</h2>
                        <h3>I specialize in backend development, creating robust databases, APIs, and server-side functionalities. With a focus on security and scalability, I ensure seamless data flow and optimal performance.</h3>
                    </div>
                    <div className="servicebox" id="servicebox">
                        <img src="https://cdn-icons-png.flaticon.com/128/10513/10513021.png"></img>
                        <h2>Website Developpement</h2>
                        <h3>
                            I provide website development services that combine stunning design with seamless functionality. With a focus on user experience, I create engaging websites that drive results.</h3>
                    </div>
                </div>
                <div className="projects" ref={props.projects}>
                    <h2 className="project-title">Projects</h2>
                    <div className="projects-container">
                        <div className="projectbox projectbox1">
                            <h2>Manga Website</h2>
                            <Link to="/manga" style={{ textDecoration: "none" }}> <button>Details</button></Link>
                        </div>
                        <div className="projectbox projectbox2">
                            <h2>Music Player</h2>
                            <Link to="/musicplayer" style={{ textDecoration: "none" }}><button>Details</button></Link>
                        </div>
                        <div className="projectbox projectbox3">
                            <h2>Discord Bot</h2>
                            <Link to="/discord" style={{ textDecoration: "none" }}><button>Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="contacts" ref={props.contact}>
                    <div>
                        <h2 className="contact-title">Contacts</h2>
                        <div className="contact-information">
                            <h3><span style={{ color: "white", textDecoration: "none" }}>*Email : </span>email@email.com</h3>
                            <h3><span style={{ color: "white", textDecoration: "none" }}>*Number : </span>04243243234</h3>
                        </div>
                    </div>
                    <h2 className="contactform-title">Write Your Message Here : </h2>
                    <div className="contactform">

                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="Name">Name :</label>
                            <input name="Name"></input>
                            <label htmlFor="Email">Email :</label>
                            <input name="Email"></input>
                            <label htmlFor="Message">Message :</label>
                            <textarea name="Message" id="Message" aria-expanded="false"></textarea>
                            <input type="submit" value="Send" />

                        </form>
                        {sent ? <h2 className="successfull">Message Sent.</h2> : ""}

                    </div>
                </div>
            </div>
        </section >
    )
}
export default Hero;