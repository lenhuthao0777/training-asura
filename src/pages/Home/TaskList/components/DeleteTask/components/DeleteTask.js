import { Button } from "antd";
import React from "react";

function DeleteTask({ handleDeleteTask }) {
    return (
        <Button
            style={{
                backgroundColor: "#e74c3c",
                borderColor: "#e74c3c",
            }}
            type="primary"
            onClick={handleDeleteTask}
        >
            Delete
        </Button>
    );
}

export default DeleteTask;
