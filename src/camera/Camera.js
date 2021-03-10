import React, {createRef, useState, useEffect} from 'react';
import './camera.css';

function Camera() {
    
    const featureArray = [
        {id: 'timeLapse', label: 'TIME-LAPSE', ref: createRef(), btnColor: 'white' },
        {id: 'sloMo', label: 'SLO-MO', ref: createRef(), btnColor: 'red'  },
        {id: 'video', label: 'VIDEO', ref: createRef(), btnColor: 'red' },
        {id: 'photo', label: 'PHOTO', ref: createRef(), btnColor: 'white', className: 'active' }, 
        {id: 'portrait', label: 'PORTRAIT', ref: createRef(), btnColor: 'white' }, 
        {id: 'pano', label: 'PANO', ref: createRef(), btnColor: 'white' }
    ];

    const [featureState, setFeatureState] =useState(featureArray);
    const [btnColor, setBtnColor] =useState("white");

    const [capture, setCapture] =useState(false);


    useEffect(() => {
       const photo = featureArray.find(x => x.className && x.className === 'active');
       photo && photo.ref && photo.ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "center"
        });
    },[]);

    function getSelected(currentId) {
        const current = featureState.find(x => x.id === currentId);
        current && current.ref && current.ref.current.scrollIntoView({
                behavior: "smooth",
                inline: "center"
            });
        setBtnColor(current.btnColor);
        const features =  featureState.map(x => {
             x.className = (x.id === currentId) ? "active" : '';
             return x;
        });
        setFeatureState(features);
    
    }

    function capturePic() {
        setCapture(true);

        setTimeout(() => {
            setCapture(false);
        }, 500)
    }

    return (
        <div className={capture ? "cam flash" : "cam"}>
            <div style={{flex:4}}></div>
            <div className="cam-menu menu">
                    <div className="menu-bar">
                        <div style={{padding:"0 16%"}}/>
                        {featureState.map((x) => <div className={x.className}  key={x.id} name={x.id} ref={x.ref} onTouchEnd={() => getSelected(x.id)}>{x.label}</div>)}
                        <div style={{padding:"0 20%"}}/>
                    </div>
                    <div className="capture">
                        <button className="capture-button" style={{backgroundColor: btnColor}} onClick={capturePic}></button>
                    </div>
            </div>
        </div>
    )
}

export default Camera;