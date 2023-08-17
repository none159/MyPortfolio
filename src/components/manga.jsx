import React, { useLayoutEffect } from "react";
import { Link } from 'react-router-dom'

const Musicplayer = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <section>
            <div className="details-container">
                <div className="topimg">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3bdg8WQ_e0BXlLy_IMXwSAHaEa%26pid%3DApi&f=1&ipt=a15e2a84b0457ad874a0e001b58ff48ef6c0291bda06e1546a70449d13daba0c&ipo=images"></img>
                </div>
                <div className="info-container">
                    <h2>Manga Website :</h2>
                    <div className="knowledgeUsed">

                        <h3>+ API</h3>

                        <h3>+ Website</h3>

                        <h3>+ Reactjs</h3>


                    </div>
                    <h3>
                        Manga websites operate by utilizing various free and open-source manga APIs to gather information about manga titles and categories. These APIs provide a vast database of manga series, including details such as titles, authors, genres, and cover images. By integrating these APIs into their platforms, manga websites can offer users a comprehensive and up-to-date catalog of manga content. In addition to the manga database, some websites incorporate group chat features using Firebase, a real-time database platform. This allows users to engage in discussions, share recommendations, and connect with fellow manga enthusiasts in a dynamic and interactive manner. The combination of manga APIs and Firebase's chat functionality enables manga websites to provide an immersive experience for users, where they can discover, explore, and engage with manga content while fostering a sense of community among fans.

                    </h3>
                </div>
                <div className="projects" >
                    <h2 className="project-title">Other Projects</h2>
                    <div className="projects-container">
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
            </div>
        </section>
    )
}
export default Musicplayer;