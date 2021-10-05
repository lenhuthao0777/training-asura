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

    // Handle change input----------------------------------
    const onFinish = (values) => {
        console.log(values);
        setEdit(true);
        const newValues = {
            ...values,
            time: values.time._d,
            dateOfBirth: values.dateOfBirth._d,
        };
        API.editData(newValues, values.id);
    };

    return <FormTask onChange={onFinish} data={taskDetailData} edit={edit} setEdit={setEdit} />;
}

export default FormContainer;
