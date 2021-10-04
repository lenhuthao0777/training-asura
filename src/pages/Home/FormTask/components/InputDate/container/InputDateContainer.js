import React from "react";
import InputDate from "../components/InputDate";
import PropTypes from "prop-types";
function InputDateContainer({ name, disabled, label }) {
    return <InputDate name={name} disabled={disabled} label={label} />;
}

export default InputDateContainer;

InputDateContainer.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};
