import React, {useState} from "react";
import MultiEmailInputField from "./MultiEmailInputField";

const DemoEmailValidator = () => {
    const [emails, setEmails] = useState("");
    return (
        <div>
            <MultiEmailInputField value={emails} onChange={(emails) => setEmails(emails)}/>
        </div>

    );
}

export default DemoEmailValidator;