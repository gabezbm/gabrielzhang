import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Gallery from "./Gallery";
import Cookies from "js-cookie";

function setTheme(theme) {
    const html = document.querySelector("html");
    html.setAttribute("color-theme", theme);
    Cookies.set("color-theme", theme);
}

function App() {
    setTheme("light"); // TODO: read theme from cookies; ssr
    // TODO: get the quote
    let [page, setPage] = useState(
        <Home quote="I have no idea how to set the quote using react." />
    );
    return (
        <>
            <div id="navbar">
                <a
                    onClick={() => {
                        setPage(
                            <Home quote="I have no idea how to set the quote using react!" />
                        );
                    }}
                    className="nav-link"
                >
                    <div>Home</div>
                </a>
                <a
                    onClick={() => {
                        setPage(<Gallery />);
                    }}
                    className="nav-link"
                >
                    <div>Gallery</div>
                </a>
                <div
                    onClick={() => {
                        if (
                            document
                                .querySelector("html")
                                .getAttribute("color-theme") === "dark"
                        ) {
                            setTheme("light");
                        } else {
                            setTheme("dark");
                        }
                    }}
                    id="theme-switcher"
                >
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </div>
            </div>
            {page}
        </>
    );
}

export default App;

