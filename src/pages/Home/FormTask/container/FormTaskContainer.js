import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "services/Client";
import FormTask from "../components/FormTask";

function FormContainer() {
    const [edit, setEdit] = useState(true);

    const [taskDetailData, setTaskDetailData] = useState({});
    const { id } = useParams();
    // Get data by id
    const getTaskById = () => {
        API.getDataById(id, (data) => {
            setTaskDetailData(data);
        });
    };

    useEffect(() => {
        getTaskById();
    }, [id]);

    return <FormTask data={taskDetailData} edit={edit} setEdit={setEdit} />;
}

export default FormContainer;
