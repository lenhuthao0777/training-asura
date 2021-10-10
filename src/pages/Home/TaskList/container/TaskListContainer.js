import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "services/Client";
import TaskList from "../components/TaskList";
import { v4 as uuid } from "uuid";
function TaskListContainer() {
    const [isLoading, setIsLoading] = useState(false);
    const [taskData, setTaskData] = useState([]);
    const fetchData = () => {
        setIsLoading(true);
        API.getAllData((data) => {
            // Format data
            const newTaskData = data.map((item) => ({
                id: item.id,
                taskName: item.taskName,
                // time: item.time,
                time: moment(item.time).format("HH:mm:ss"),
                name: item.name,
                // dateOfBirth: item.dateOfBirth,
                dateOfBirth: moment(item.dateOfBirth).format("YYYY-MM-DD"),
                address: item.address,
                phone: item.phone,
                email: item.email,
                currentJob: item.currentJob,
                experience: item.experience,
                note: item.note,
                key: uuid(),
                idCard: item.idCard,
                workStartTime: moment(item.workStartTime).format("HH:mm:ss"),
                workFinishTime: moment(item.workFinishTime).format("HH:mm:ss"),
            }));
            setTaskData(newTaskData);
        }).finally(() => {
            setIsLoading(false);
        });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <TaskList taskData={taskData} isLoading={isLoading} />;
}

export default TaskListContainer;
