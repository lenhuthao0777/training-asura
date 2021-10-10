import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function RemoveField({ disabled, handleRemoveField }) {
    return (
        <Button type="primary" onClick={handleRemoveField}>
            <MinusCircleOutlined />
        </Button>
    );
}
export default RemoveField;
