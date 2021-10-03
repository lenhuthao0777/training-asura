import { DatePicker } from "antd";
import React from "react";

function InputDate({ label, onChange, value, name, disabled }) {
    return (
        <div
            className="input__group"
            style={{ display: "flex", flexDirection: "column", marginBottom:"10px" }}
        >
            <label htmlFor="">{label}:</label>
            <DatePicker
                onChange={onChange}
                name={name}
                value={value}
                disabled={disabled}
            />
        </div>
    );
}

export default InputDate;
