import React from "react";
import { Form, Button } from "antd";
function AddField({ handleAction, disabled }) {
    return (
        <Form.Item style={{ marginRight: "10px" }}>
            <Button
                type="primary"
                disabled={disabled}
                onClick={() => handleAction("addField")}
            >
                Add Field
            </Button>
        </Form.Item>
    );
}

export default AddField;
