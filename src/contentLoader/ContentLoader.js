import React from 'react';
import "./content-loader.css"

const ContentLoader = () => {
    const listLength = [{key:1}, {key:2}, {key:3}, {key:4}, {key:5}];

    const renderLoaderComponent = (key) => {
        return (
            <div class="timeline-item" key={`item${key}`}>
        <div class="animated-background">
            <div class="background-masker header-left"></div>
            <div class="background-masker header-right"></div>

            <div class="background-masker header-top"></div>
            <div class="background-masker subheader-left"></div>
            <div class="background-masker subheader-right"></div>
            <div class="background-masker subheader-bottom"></div>
            <div class="background-masker subheader-second-left"></div>
            <div class="background-masker subheader-second-right"></div>
            <div class="background-masker subheader-second-bottom"></div>
        </div>
    </div>
        );
    }
    return (
        <div class="timeline-wrapper">
            <div className="loader-wrapper"><div className="loader"/>loading, please wait...</div>
            {listLength.map(x => renderLoaderComponent(x))}
        </div>
    );
};

export default ContentLoader;