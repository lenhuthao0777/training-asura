import React from "react";
import API from "services/Client";
import DeleteTask from "../components/DeleteTask";

function DeleteContainer({ id }) {
    const handleDeleteTask = () => {
        API.deleteDataById(id);
    };
    return <DeleteTask handleDeleteTask={handleDeleteTask} />;
}

export default DeleteContainer;
