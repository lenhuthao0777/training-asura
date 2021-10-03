import { Button } from "antd";
import React from "react";

function Edit({ onHandelEdit }) {
    return (
        <Button style={{ marginTop: "20px" }} size="large" type="primary" onClick={onHandelEdit}>
            Save Edit
        </Button>
    );
}

export default Edit;
