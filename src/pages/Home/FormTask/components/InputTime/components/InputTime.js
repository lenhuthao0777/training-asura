import { TimePicker } from "antd";
import React from "react";

function InputTime({ label, onChange, value, name, disabled }) {
    return (
        <div
            className="input__group"
            style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
            }}
        >
            <label htmlFor="">{label}:</label>
            <TimePicker
                onChange={onChange}
                name={name}
                value={value}
                disabled={disabled}
            />
        </div>
    );
}

export default InputTime;
