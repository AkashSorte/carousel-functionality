import React, {createRef, useState, useEffect} from 'react';
import Carousel from '../carousel/Carousel';
import './slider.css';

function Slider() {
    const [displayModal, setDisplayModal] = useState(false);
    return (
        <div className="main">
            <div style={{height: "90%"}}>
            <Carousel />
            </div>
            <div style={{ height: "10%", textAlign: "center"}}>
                <button className="slide" onTouchEnd={(e) => setDisplayModal(!displayModal)}><span className="icon"/></button>
            </div>
            <div>
                <div className={`Modal ${displayModal ? "Show" : ""}`}>
                    <button className="Close" onClick={() => setDisplayModal(!displayModal)} style={{backgroundColor: "#ac00e6"}}>
                        Email & Save to QuickBooks
                    </button>
                    <button className="Close" onClick={() => setDisplayModal(!displayModal)} style={{backgroundColor: "#00e6e6"}}>
                        Email Team & Save to Google Drive
                    </button>
                    <button className="Close" onClick={() => setDisplayModal(!displayModal)} style={{backgroundColor: "#ff0000"}}>
                        Print, Email & Share
                    </button>
                    <button className="Close" onClick={() => setDisplayModal(!displayModal)} style={{backgroundColor: "#cc0099"}}>
                        Save to Google Drive
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Slider;