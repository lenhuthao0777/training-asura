import React from "react";

function Edit({ onHandelEdit }) {
    return (
        <button type="button" style={{ marginTop: "20px" }} className="btn btn-primary" onClick={onHandelEdit}>
            Save Edit
        </button>
    );
}

export default Edit;
