import React from "react";

const Nav = (props) => {


    return (
        <nav className="navigator" ref={props.top}>
            <div className="nav-container">
                <div>
                    <h2 className="logo">My Portfolio</h2>

                </div>
                <div className="pages" >
                    <h2 onClick={() => props.scrolltosection(props.top)}>Home</h2>
                    <h2 onClick={() => props.scrolltosection(props.about)}>About</h2>
                    <h2 onClick={() => props.scrolltosection(props.services)} >Service</h2>
                    <h2 onClick={() => props.scrolltosection(props.projects)}>Projects</h2>
                    <h2 onClick={() => props.scrolltosection(props.contact)}>Contact</h2>
                </div>
            </div>
        </nav>
    )
}
export default Nav;