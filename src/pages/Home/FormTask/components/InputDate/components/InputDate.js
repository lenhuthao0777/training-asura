import { DatePicker, Form } from "antd";
import React from "react";

function InputDate({ label, name, disabled }) {
    return (
        <Form.Item name={name} label={label}>
            <DatePicker disabled={disabled} />
        </Form.Item>
    );
}

export default InputDate;
