import React from "react";
import { Form, TimePicker } from "antd";
function RangePickerInput({name, label, disabled}) {
    return (
        <Form.Item name={name} label={label}>
            <TimePicker.RangePicker disabled={disabled} />
        </Form.Item>
    );
}

export default RangePickerInput;
