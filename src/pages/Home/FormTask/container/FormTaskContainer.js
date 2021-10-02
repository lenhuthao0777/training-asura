import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormTask from "../components/FormTask";
function FormContainer() {
    const { taskDetail } = useSelector((state) => state.TaskReducer);
    const [taskDetailData, setTaskDetailData] = useState({});

    useEffect(() => {
        setTaskDetailData(taskDetail);
    }, [taskDetail]);
    return <FormTask taskDetailData={taskDetailData} setTaskDetailData={setTaskDetailData} />;
}

export default FormContainer;
