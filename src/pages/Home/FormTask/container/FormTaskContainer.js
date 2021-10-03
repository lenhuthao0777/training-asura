import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "services/Client";
import FormTask from "../components/FormTask";
function FormContainer() {
    const [taskDetailData, setTaskDetailData] = useState({});
    const { id } = useParams();

    const getTaskById = () => {
        // const promise = new Promise()
        API.getDataById(parseInt(id));
    };
    console.log(taskDetailData);
    useEffect(() => {
        getTaskById();
    }, [id]);
    return (
        <FormTask
            taskDetailData={taskDetailData}
            setTaskDetailData={setTaskDetailData}
        />
    );
}

export default FormContainer;
