import { Form, TimePicker } from "antd";
import React from "react";

function InputTime({ label, name, disabled }) {
    return (
        <Form.Item name={name} label={label}>
            <TimePicker disabled={disabled} />
        </Form.Item>
    );
}

export default InputTime;
