import React from 'react';
import { Typewriter, Cursor } from "react-simple-typewriter";
import "./navbarcolour.css";

export default function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#340a82' }}>
                <div className="container-fluid">
                    <h2 className="navbar-brand" href="/">{props.title}</h2>
                    <span id='text'><Typewriter
                        words={["The secret of getting ahead is getting started","It’s hard to beat a person who never gives up","Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE"]}
                        loop={100}
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                    /></span><span id='cursor'><Cursor cursorStyle="/" /></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
