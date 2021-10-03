import React from "react";
import PropTypes from "prop-types";
import InputTime from "../components/InputTime";
function InputTimeContainer({ name, value, disabled, onChange, label }) {
    return (
        <InputTime
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
            label={label}
        />
    );
}

export default InputTimeContainer;

InputTimeContainer.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
};
