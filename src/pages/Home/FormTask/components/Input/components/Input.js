import { Form, Input } from "antd";
import React from "react";
function InputText({ name, disabled, label }) {
    return (
        <Form.Item name={name} label={label}>
            <Input disabled={disabled} />
        </Form.Item>
    );
}

export default InputText;
