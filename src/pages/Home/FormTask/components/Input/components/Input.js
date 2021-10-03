import React from "react";
import { Input } from "antd";
function InputText({ name, value, disabled, onChange, label }) {
    return (
        <div className="input__group" style={{marginBottom: "10px"}}>
            {label ? <label htmlFor="">{label}:</label> : null}
            <Input
                disabled={disabled}
                name={name}
                value={value}
                onChange={onChange}
                // placeholder="Basic usage"
            />
        </div>
    );
}

export default InputText;
