import { DETAIL, GET_DATA } from "constants/index";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "services/Client";
import TaskList from "../components/TaskList";
function TaskListContainer() {
    const { taskData } = useSelector((state) => state.TaskReducer);
    const dispatch = useDispatch();
    const fetchData = () => {
        API.getAllData((data) => {
          // Format data
            const newData = data.map((item) => ({
                id: item.id,
                taskName: item.taskName,
                time: item.time,
                // time: moment(item.time).format("HH:mm:ss"),
                name: item.name,
                // dateOfBirth: item.dateOfBirth,
                dateOfBirth: moment(item.dateOfBirth).format("YYYY-MM-DD"),
                address: item.address,
                phone: item.phone,
                email: item.email,
                currentJob: item.currentJob,
                experience: item.experience,
                note: item.note,
                // key: item.id,
            }));
            dispatch({
                type: GET_DATA,
                payload: {
                    data: newData,
                },
            });
        });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <TaskList taskData={taskData} type={DETAIL} />;
}

export default TaskListContainer;
