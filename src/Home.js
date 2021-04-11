import React from 'react';
import {
    Link
  } from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <Link to="/cameraAnimation">cameraAnimation</Link>
                </li>
                <li>
                    <Link to="/carousel">carousel</Link>
                </li>
                <li>
                    <Link to="/SlideFooter">SlideFooter</Link>
                </li>
                <li>
                    <Link to="/Dropdown">Dropdown</Link>
                </li>
                <li>
                    <Link to="/editable">Editable Field</Link>
                </li>
                </ul>
            </nav> 
        </div>
    );
}

export default Home;