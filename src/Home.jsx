import "./Home.css";

import avatar from "/avatar.jpg";

export default function Home({ quote }) {
    return (
        <div id="info-container">
            <div id="avatar">
                <img src={avatar} alt="Gabriel Zhang Avatar" />
            </div>
            <div id="main-info">
                <h1>Gabriel Zhang</h1>
                <h2>CS Junior @ ShanghaiTech</h2>
                <p id="quote">{quote}</p>
            </div>
            <div id="contact-info">
                <h3>Contact Me</h3>
                <div id="contact-links">
                    <a href="https://github.com/gabezbm">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/gabriel.b.zhang">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="mailto:gabrielzhang@berkeley.edu">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
