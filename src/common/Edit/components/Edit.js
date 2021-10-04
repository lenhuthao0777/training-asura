import { Button, Form } from "antd";
import React from "react";

function Edit() {
    return (
        <Form.Item>
            <Button style={{ marginRight: "20px" }} size="large" type="primary">
                Save Edit
            </Button>
        </Form.Item>
    );
}

export default Edit;
