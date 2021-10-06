import React from "react";
import RangePickerInput from "../components/RangePickerInput";

function RangePickerInputContainer({name, label, disabled}) {
    return <RangePickerInput name={name} label={label} disabled={disabled} />;
}

export default RangePickerInputContainer;
