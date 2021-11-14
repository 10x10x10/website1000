import React from "react";
import Link from "next/link";
import { aboutData } from "../../data.js";

export default function Header(props) {

    const { intro, contacts, experiences, } = aboutData;

    return (
        <div className="about-container">
            <div className="row m-col">
                <div className="middle">
                    {/* <iframe
                        className="draw-view"
                        src="https://editor.p5js.org/1000cheng/embed/AIYo4-nCa"
                        height="300px"
                        width="300px"
                        style={{ borderStyle: 'none' }}></iframe> */}
                </div>
                <div>
                    <div className="intro">
                        <h1>{intro.title}</h1>
                        {
                            intro.descriptions.map((description) => {
                                return <p className="description" key={description}>{description}</p>;
                            })
                        }
                    </div>
                    <div className="split-line" />
                    <div className="contact">
                        <h1>Contact me</h1>
                        <ul>
                            {
                                contacts.map((contact) => {
                                    return (
                                        <li key={contact.link}>
                                            <img className="contact-icon" src={contact.icon} />
                                            <a href={contact.link} target="_blank">{contact.text}</a>
                                        </li>);
                                })
                            }
                        </ul>
                    </div>
                    <div className="split-line" />
                    <div className="experience">
                        <h1>Experience</h1>
                        {
                            experiences.map((experience) => {
                                return (
                                    <div className="experience-year-container" key={experience.year}>
                                        <h2>{experience.year}</h2>
                                        <ul>
                                            {
                                                experience.items.map((item) => {
                                                    return (
                                                        <div key={item.text}>
                                                            {
                                                                (false && item.link !== '') ? (
                                                                    <li>
                                                                        <a href={item.link}>{item.text}</a>
                                                                        <img src='../src/icons/external-link.svg' />
                                                                    </li>
                                                                ) : (
                                                                    <li>{item.text}</li>
                                                                )
                                                            }
                                                        </div>);
                                                })
                                            }
                                        </ul>
                                    </div>);
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}