import React from "react";
import Input from "../components/Input";
import PropTypes from "prop-types";
function inputContainer({ value, name, disabled, onChange, label }) {
    return (
        <Input
            value={value}
            name={name}
            disabled={disabled}
            onChange={onChange}
            label={label}
        />
    );
}

export default inputContainer;

inputContainer.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
};
