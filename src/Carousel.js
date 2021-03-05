import React, {createRef, useState} from 'react';
import './carousel.css';
import imageArray from './img/image';

function Carousel() {

    let initialPosition = null;
    let moving = false;
    let transform = 0;
    const track = createRef();
    const [currentIndex, setCurrentIndex] = useState(1);
    let diff = 0;

    // const onPointerDown = (e) => {
    //     initialPosition = e.pageX;
    //     moving = true;
    //     let transformMatrix= track.current.style.transform
    //     transform = transformMatrix && transformMatrix.replace('translateX(', '').replace('px)', '');
    // }

    // const onPointerMove = (e) => {
    //     if (moving) {
    //         const currentPosition = e.pageX;
    //         const diff = currentPosition - initialPosition;
    //         track.current.style.transform = `translateX(${(transform ? parseFloat(transform) : 0) + diff}px)`;
    //     }
    // }

    const onPointerDown = (e) => {
        initialPosition = e.pageX;
        moving = true;
        let transformMatrix= track.current.style.transform
        transform = transformMatrix && transformMatrix.replace('translateX(', '').replace('px)', '');
    }

    const onPointerMove = (e) => {
        console.log(e.currentTarget.getAttribute("name"));
        if (moving) {
            const currentPosition = e.pageX;
            diff = currentPosition - initialPosition;
            track.current.style.transform = `translateX(${(transform ? parseFloat(transform) : 0) + diff}px)`;
        }
    }

    const gestureEnd = (e) => {
        moving = false;
        let count =0;
        if (diff < 0) {
            count = parseInt(e.currentTarget.getAttribute("name"))+1;
        } else {
            count = parseInt(e.currentTarget.getAttribute("name"))-1;
        }
        let childCounter = count <= 0 ? 0 : count >= imageArray.length ? imageArray.length-1 : count;
        setCurrentIndex(childCounter+1);
        track.current.children[childCounter].scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

    return (
      <div className="App">
        <div className="container">
        <div className="carousel">
            <div style={{width:'100%', left: 0, right:0}}>
                <div className="track" ref={track}> 
                    {imageArray && imageArray.map((i, index) => <div key={`key-${index}`} name={index} className="card"  onPointerDown={e => onPointerDown(e)} onPointerMove={e => onPointerMove(e)} onPointerUp={e => gestureEnd(e)}>
                        <img src={i} key={`img-${index}`}/>
                        </div>)}
                </div>
            </div>
        </div>
        <div style={{width:'100%'}}>{`${imageArray && currentIndex+"/"+imageArray.length}`}</div>
        </div>
      </div>
    );
  }
  
export default Carousel;