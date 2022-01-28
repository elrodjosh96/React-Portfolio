import React from "react";

export default function Resume() {
    return (
        <div>
            <h1>Here are some of the languages/skills I have learned so far!</h1>
            <div>

                <span className="frontend">
                    <h2>Front-end:</h2>
                    <h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>JavaScript</li>
                        </ul>
                    </h3>
                </span>

                <span className="backend">
                    <h2>Back-end:</h2>
                    <h3>
                        <ul>
                            <li>mySQL</li>
                            <li>Node.js</li>
                            <li>API routing</li>
                            <li>Express.js</li>
                            <li>GraphQL</li>
                            <li>Inquirer.js</li>
                        </ul>
                    </h3>
                </span>
            </div>
        </div>
    );
}