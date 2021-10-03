import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Detail({ onHandleDetail, id }) {
    return (
        <Link to={`/form-task/${id}`}>
            <Button type="primary" size="large" onClick={onHandleDetail}>
                Detail
            </Button>
        </Link>
    );
}

export default Detail;


