import { MinusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function RemoveField({ edit, handleRemoveField }) {
    return (
        <Button
            type="primary"
            onClick={handleRemoveField}
            style={{ marginLeft: "10px" }}
            disabled={edit.edit}
        >
            <MinusCircleOutlined />
        </Button>
    );
}
export default RemoveField;
