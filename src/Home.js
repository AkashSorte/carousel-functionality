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
                <li>
                    <Link to="/contentLoader">Content Loader</Link>
                </li>
                <li>
                    <Link to="/breadCrumbs">BreadCrumb's Demo</Link>
                </li>
                <li>
                    <Link to="/emailValidator">Email Validator Demo</Link>
                </li>
                <li>
                    <Link to="/styleComponent">Style Component</Link>
                </li>
                </ul>
            </nav> 
        </div>
    );
}

export default Home;