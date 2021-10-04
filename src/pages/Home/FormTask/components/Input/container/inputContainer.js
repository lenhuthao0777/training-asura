import React from "react";
import Input from "../components/Input";
import PropTypes from "prop-types";
function inputContainer({ name, disabled, label }) {
    return <Input name={name} disabled={disabled} label={label} />;
}

export default inputContainer;

inputContainer.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};
