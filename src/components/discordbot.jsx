import React, { useLayoutEffect } from "react";
import { Link } from 'react-router-dom'

const Discord = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <section>
            <div className="details-container">
                <div className="topimg">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6dO4y33xh9ngt2dKcnXPnAHaEK%26pid%3DApi&f=1&ipt=c7b9f5cd8df62a01f0a90db93982e3ed3a7cc21058a4c8f1c72402c9af0a36b8&ipo=images"></img>
                </div>
                <div className="info-container">
                    <h2>Discord Bot :</h2>
                    <div className="knowledgeUsed">

                        <h3>- API</h3>

                        <h3>+ Website & Bot</h3>

                        <h3>+ Reactjs & Js</h3>


                    </div>
                    <h3>

                        Discord bots are automated virtual assistants designed to enhance the functionality and engagement of Discord servers. These bots perform various tasks and provide features that make server management and user interactions more efficient. For instance, a Discord bot can track user levels, allowing server administrators to create a leveling system that rewards users based on their activity and participation. Additionally, these bots can welcome new guests to the server by sending customized greetings, providing a warm and inclusive atmosphere. Conversely, when users leave the server, the bot can bid them farewell, ensuring a friendly goodbye. Moreover, Discord bots often include mini-games to entertain server members during their downtime. These games can range from simple quizzes to complex role-playing adventures, adding a fun and interactive element to the server experience. Overall, Discord bots are versatile tools that combine functionality, community management, and entertainment to create vibrant and engaging online communities.


                    </h3>
                </div>
                <div className="projects" >
                    <h2 className="project-title">Other Projects</h2>
                    <div className="projects-container">
                        <div className="projectbox projectbox1">
                            <h2>Manga Website</h2>
                            <Link to="/manga" style={{ textDecoration: "none" }}><button>Details</button></Link>
                        </div>

                        <div className="projectbox projectbox2">
                            <h2>Music Player</h2>
                            <Link to="/musicplayer" style={{ textDecoration: "none" }}><button>Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Discord;