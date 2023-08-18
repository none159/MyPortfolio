import React from "react";
import { Link } from 'react-router-dom'

const Musicplayer = () => {

    return (
        <section>
            <div className="details-container">
                <div className="topimg">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hhyh2zliXFn_1jMxoHVYxAHaEo%26pid%3DApi&f=1&ipt=6e68349da4664b0261e5a269de5b4e5f403ed02ae84ae7b514aa6d78f7e6a824&ipo=images"></img>
                </div>
                <div className="info-container">
                    <h2>Music Player :</h2>
                    <div className="knowledgeUsed">

                        <h3>- API</h3>

                        <h3>+ Website</h3>

                        <h3>+ Reactjs</h3>


                    </div>
                    <h3>
                        Introducing a captivating music player website that brings the joy of music to your fingertips. Immerse yourself in a world of enchanting melodies as you explore a diverse collection of tunes spanning various genres. With an intuitive and sleek interface, navigating through the website is effortless . Whether you're in the mood for soothing jazz, upbeat pop, or electrifying rock, this platform has something for everyone. Get ready to embark on a musical journey that will transport you to new realms of sonic bliss.





                    </h3>
                </div>
                <div className="projects" >
                    <h2 className="project-title">Other Projects</h2>
                    <div className="projects-container">
                        <div className="projectbox projectbox1">
                            <h2>Manga Website</h2>
                            <Link to="/manga" style={{ textDecoration: "none" }}><button>Details</button></Link>
                        </div>

                        <div className="projectbox projectbox3">
                            <h2>Discord Bot</h2>
                            <Link to="/discord" style={{ textDecoration: "none" }}><button>Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Musicplayer;
