import React, {useState} from "react";
import PropTypes from 'prop-types';
import "./multiEmail.css"

const MultiEmailInputField = (props) => {
    const [error, setError] = useState("");

    function onTextAreaChange(e) {
        const emails = e.target.value || "";
        const emailArr = emails ? emails.split(","): [];
        const data = emailArr.map(x => x.trim());
        console.log(data);
        console.log("isError" + ValidateEmail(data));
        if (ValidateEmail(data))
            setError("One or more email addresses entered is invalid");
        else
            setError("");

        props.onChange(emails);    
    }

    function ValidateEmail(emails=[]) {
        const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        return emails.some(x => {
            const email = x ? x.trim() : "";
            return email ? !x.match(validRegex) : false;
        });
    }

    return (
        <div className="text-area-wrapper">
            <textarea id= "email" style={{borderColor: error ? "red": "black"}} id="w3review" name="w3review" rows="4" cols="50" onChange={(e) => onTextAreaChange(e)}>
                {props.value}
            </textarea>
            <label for="email">Enter email:</label>

            {error && <div><span className="error-icon"/><span>{error}</span></div>}
        </div>
    );
};

MultiEmailInputField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default MultiEmailInputField;