import React from "react";
import InputDate from "../components/InputDate";
import PropTypes from "prop-types";
function InputDateContainer({ name, value, disabled, onChange, label }) {
    return (
        <InputDate
            name={name}
            value={value}
            disabled={disabled}
            onChange={onChange}
            label={label}
        />
    );
}

export default InputDateContainer;

InputDateContainer.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
};
