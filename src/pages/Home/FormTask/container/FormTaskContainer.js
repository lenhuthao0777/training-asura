import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormTask from "../components/FormTask";
function FormContainer() {
    const { taskDetail } = useSelector((state) => state.TaskReducer);
    const [taskDetailData, setTaskDetailData] = useState({
        id: taskDetail.id,
        taskName: taskDetail.taskName,
        time: taskDetail.time,
        name: taskDetail.name,
        dateOfBirth: taskDetail.dateOfBirth,
        address: taskDetail.address,
        phone: taskDetail.phone,
        email: taskDetail.email,
        currentJob: taskDetail.currentJob,
        experience: taskDetail.experience,
        note: taskDetail.note,
    });

    useEffect(() => {
        setTaskDetailData(taskDetail);
    }, [taskDetail]);
    return <FormTask taskDetailData={taskDetailData} setTaskDetailData={setTaskDetailData}/>;
}

export default FormContainer;
