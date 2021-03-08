import React, {createRef, useState} from 'react';
import './camera.css';

function Camera() {
    
    const featureArray = [
        {id: 'timeLapse', label: 'TIME-LAPSE', ref: createRef(), className: 'active', btnColor: 'white' },
        {id: 'sloMo', label: 'SLO-MO', ref: createRef(), btnColor: 'red'  },
        {id: 'video', label: 'VIDEO', ref: createRef(), btnColor: 'red' },
        {id: 'photo', label: 'PHOTO', ref: createRef(), btnColor: 'white' }, 
        {id: 'portrait', label: 'PORTRAIT', ref: createRef(), btnColor: 'white' }, 
        {id: 'pano', label: 'PANO', ref: createRef(), btnColor: 'white' }
    ];

    const [featureState, setFeatureState] =useState(featureArray);
    const [btnColor, setBtnColor] =useState("white");

    function onTouchEnd(e, ref) {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });

       const features =   featureState.map(x => {
            if (x.id === ref.current.getAttribute("name")) {
                x.className= "active"
            } else {
                x.className = '';
            }
             return x;
        });

        const current = featureArray.find(x => x.id === ref.current.getAttribute("name"));

        setBtnColor(current.btnColor);

        setFeatureState(features);
    }

    return (
        <div className="cam">
            <div style={{flex:4}}>Test</div>
            <div className="cam-menu menu">
                    <div className="menu-bar">
                        <div style={{padding:"0 16%"}}/>
                        {featureState.map((x) => <div className={x.className}  key={x.id} name={x.id} ref={x.ref} onTouchEnd={e => onTouchEnd(e, x.ref)}>{x.label}</div>)}
                        <div style={{padding:"0 20%"}}/>
                    </div>
                    <div className="capture">
                        <botton className="capture-button" style={{backgroundColor: btnColor}}></botton>
                    </div>
            </div>
        </div>
    )
}

export default Camera;