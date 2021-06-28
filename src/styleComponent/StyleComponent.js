import React from "react";
import "./styleComponent.css";
import PropTypes from 'prop-types';

const StyleComponent = (props) => {
    return (
        <div className={props.backgroundWrapperClass || "style-comp-wrapper"}>
            <div className={props.contextWrapperClass || "content-wrap"} style={props.styleOverride}>test</div>
        </div>
    );
};

StyleComponent.propTypes = {
    backgroundWrapperClass: PropTypes.string,
    contextWrapperClass: PropTypes.string,
    styleOverride: PropTypes.object
}

export default StyleComponent;