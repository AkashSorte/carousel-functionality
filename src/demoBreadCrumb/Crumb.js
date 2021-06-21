import React from "react";
import { Link } from "react-router-dom";


const Furniture = () => {
    return (
        <div style={{ padding: "20px" }}>
            Menu:
            <ul>
                <li>
                    <Link to="/breadCrumbs/furniture/livingRoom">Living Room</Link>
                </li>
            </ul>
        </div>
    );
};

const LivingRoom = () => {
    return (
        <div style={{ padding: "20px" }}>
            Menu:
            <ul>
                <li>
                    <Link to="/breadCrumbs/furniture/livingRoom/sofa">Sofa Bed</Link>
                </li>
            </ul>
        </div>
    );
};

const sofaBed = () => {
    return (
        <div style={{ padding: "20px" }}>
            Menu:
            <ul>
                <li>
                    Sofa Bed
                </li>
            </ul>
        </div>
    );
};

const Crumbs = () => {
    return (
        <div style={{ padding: "20px" }}>
            BreadCrumb's Demo:
            <ul>
                <li>
                    <Link to="/breadCrumbs/furniture">Furniture</Link>
                </li>
            </ul>
        </div>
    );
};

export {Crumbs, Furniture, LivingRoom, sofaBed}





