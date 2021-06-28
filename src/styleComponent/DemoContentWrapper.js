import React from "react";
import StyleComponent from "./StyleComponent";

const DemoContentWrapper = () => {
    const styleOverride= {
        backgroundColor: "green"
    }
    return (
        <StyleComponent contextWrapperClass="content-wrap-override" styleOverride={styleOverride} backgroundWrapperClass="background-override" />
    );
}

export default DemoContentWrapper;