import { Button, Form, Spin } from "antd";
import moment from "moment";
import withFormContainer from "pages/Home/FormTask/container/FormTaskContainer";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { TYPE_FIELDS } from "../../assets/constants";
import TaskDetailViewFieldItem from "../components/TaskDetailViewFieldItem";

function TaskDetailView(props) {
    const { id } = useParams();
    const { getTaskById, updateTaskById, taskById, loading } = props;
    const [inputValue, setInputValue] = useState({});
    const [disabled, setDisabled] = useState(true);
    const inputList = useMemo(() => {
        return [
            {
                id: 1,
                label: "Id:",
                name: "id",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.id || "",
            },
            {
                id: 2,
                label: "Task Name:",
                name: "taskName",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.taskName || "",
            },
            {
                id: 4,
                label: "Name:",
                name: "name",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.name || "",
            },
            {
                id: 5,
                label: "Date Of Birth:",
                name: "dateOfBirth",
                type: TYPE_FIELDS.DATE,
                value: moment(inputValue.dateOfBirth, "DD/MM/YYYY"),
            },
            {
                id: 6,
                label: "Address:",
                name: "address",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.address || "",
            },
            {
                id: 7,
                label: "Phone:",
                name: "phone",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.phone || "",
            },
            {
                id: 8,
                label: "Email:",
                name: "email",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.email || "",
            },
            {
                id: 9,
                label: "Current Job:",
                name: "currentJob",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.currentJob || "",
            },
            {
                id: 10,
                label: "Experience:",
                name: "experience",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.experience || "",
            },
            {
                id: 11,
                label: "Note:",
                name: "note",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.note || "",
            },
            {
                id: 12,
                label: "Id Card:",
                name: "idCard",
                type: TYPE_FIELDS.TEXT,
                value: inputValue.idCard || "",
            },
            {
                id: 13,
                label: "Work Time:",
                name: ["workStartTime", "workFinishTime"],
                type: TYPE_FIELDS.TIME_FROM_TO,
                value: [
                    moment(inputValue.workStartTime, "HH:mm:ss") || "",
                    moment(inputValue.workFinishTime, "HH:mm:ss") || "",
                ],
            },
        ];
    }, [inputValue]);

    useEffect(() => {
        getTaskById(id);
    }, [getTaskById, id]);

    useEffect(() => {
        setInputValue(taskById);
    }, [taskById]);

    const formatValue = (values) => {
        const dateOfBirth = new Date(
            values.dateOfBirth._d
        ).toLocaleDateString();
        const workStartTime = new Date(
            values.workStartTime.workFinishTime[0]._d
        ).toLocaleTimeString();
        const workFinishTime = new Date(
            values.workStartTime.workFinishTime[1]._d
        ).toLocaleTimeString();

        return {
            dateOfBirth,
            workStartTime,
            workFinishTime,
        };
    };

    const onSubmit = (values) => {
        const valueFormat = formatValue(values);
        const newValues = {
            ...values,
            ...valueFormat,
        };
        console.log(newValues);
        setInputValue(newValues);
        setDisabled(true);
        updateTaskById(newValues.id, newValues);
    };

    const fields = useMemo(() => {
        return inputList.map((input) => {
            return {
                name: input.name,
                value: input.value,
            };
        });
    }, [inputList]);

    return (
        <div
            className="task-detail container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ textAlign: "center" }}>
                {disabled ? "Detail Task" : "Edit Task"}
            </h1>
            {loading ? (
                <Spin size="small" />
            ) : (
                <>
                    <Button
                        style={{ margin: "10px 0", width: "80px" }}
                        type="primary"
                        onClick={() => {
                            setDisabled(!disabled);
                        }}
                    >
                        {disabled ? "Edit" : "Cancel"}
                    </Button>
                    <div className="text-list">
                        <Form
                            fields={fields}
                            name="global_state"
                            layout="vertical"
                            onFinish={onSubmit}
                            style={{ width: "400px" }}
                        >
                            {inputList.map((info) => (
                                <TaskDetailViewFieldItem
                                    disabled={disabled}
                                    key={info.name + info.label}
                                    name={info.name}
                                    label={info.label}
                                    type={info.type}
                                />
                            ))}
                            {disabled || (
                                <Button
                                    style={{
                                        display: "block",
                                        margin: "10px 0",
                                    }}
                                    htmlType="submit"
                                    type="primary"
                                >
                                    Submit
                                </Button>
                            )}
                        </Form>
                    </div>
                </>
            )}
        </div>
    );
}

export default withFormContainer(TaskDetailView);
