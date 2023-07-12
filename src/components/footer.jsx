import React from "react";


const Footer = (props) => {

    return (
        <footer>
            <div className="footer-container" ref={props.top}>
                <div className="footer-links">
                    <h2 onClick={() => props.scrolltosection(props.top)}>Home</h2>
                    <h2 onClick={() => props.scrolltosection(props.about)}>About</h2>
                    <h2 onClick={() => props.scrolltosection(props.services)}>Service</h2>
                    <h2 onClick={() => props.scrolltosection(props.projects)}>Projects</h2>
                    <h2 onClick={() => props.scrolltosection(props.contact)}>Contact</h2>
                </div>
                <div className="socials">
                    <img src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png" />
                    <img src="https://cdn-icons-png.flaticon.com/128/10097/10097121.png" />
                    <img src="https://cdn-icons-png.flaticon.com/128/10097/10097054.png" />
                    <img src="https://cdn-icons-png.flaticon.com/128/10096/10096611.png" />
                </div>
                <h2 className="copyright">Copyright 2023-2024</h2>
            </div>
        </footer>
    );
}
export default Footer;