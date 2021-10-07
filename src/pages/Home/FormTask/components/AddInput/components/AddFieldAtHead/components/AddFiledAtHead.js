import React from "react";
import { Form, Button } from "antd";

function AddFiledAtHead({ handleAction, disabled }) {
    return (
        <Form.Item>
            <Button
                type="primary"
                onClick={() => handleAction("addFieldAtHead")}
                disabled={disabled}
            >
                Add Field At Head
            </Button>
        </Form.Item>
    );
}

export default AddFiledAtHead;
