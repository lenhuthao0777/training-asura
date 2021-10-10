import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

function AddCurrentFiled({ edit, addCurrentField }) {
    return (
        <Button
            type="primary"
            onClick={addCurrentField}
            style={{ marginLeft: "10px" }}
            disabled={edit}
        >
            <PlusOutlined />
        </Button>
    );
}

export default AddCurrentFiled;
