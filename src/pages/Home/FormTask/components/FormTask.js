import { Button } from "antd";
import Edit from "common/Edit";
import React, { useState } from "react";
import "../assets/style.scss";
import Input from "./Input";
import InputDate from "./InputDate";
import InputTime from "./InputTime";
function FormTask({ taskDetailData, setTaskDetailData, onChangeInput }) {
    const [edit, setEdit] = useState(true);

    // Handle change input
    // const onChangeInput = (e) => {
    //     const newData = { ...taskDetailData };
    //     newData[e.target.name] = e.target.value;
    //     setTaskDetailData(newData);
    // };

    // Array input
    const input = [
        {
            id: 1,
            label: "Id",
            name: "id",
            type: "number",
            value: taskDetailData.id || "",
        },
        {
            id: 2,
            label: "Task Name",
            name: "taskName",
            type: "text",
            value: taskDetailData.taskName || "",
        },
        {
            id: 3,
            label: "Time",
            name: "time",
            type: "time",
            value: taskDetailData.time || "",
        },
        {
            id: 4,
            label: "Name",
            name: "name",
            type: "text",
            value: taskDetailData.name || "",
        },
        {
            id: 5,
            label: "Date Of Birth",
            name: "dateOfBirth",
            type: "date",
            value: taskDetailData.dateOfBirth || "",
        },
        {
            id: 6,
            label: "Address",
            name: "address",
            type: "text",
            value: taskDetailData.address || "",
        },
        {
            id: 7,
            label: "Phone",
            name: "phone",
            type: "text",
            value: taskDetailData.phone || "",
        },
        {
            id: 8,
            label: "Email",
            name: "email",
            type: "email",
            value: taskDetailData.email || "",
        },
        {
            id: 9,
            label: "Current Job",
            name: "currentJob",
            type: "text",
            value: taskDetailData.currentJob || "",
        },
        {
            id: 10,
            label: "Experience",
            name: "experience",
            type: "text",
            value: taskDetailData.experience || "",
        },
        {
            id: 11,
            label: "Note",
            name: "note",
            type: "text",
            value: taskDetailData.note || "",
        },
    ];
    const renderInput = () => {
        return input.map((item) => {
            if (item.type === "text") {
                return (
                    <Input
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        key={item.id}
                        onChange={onChangeInput}
                        disabled={edit}
                    />
                );
            } else if (item.type === "date") {
                return (
                    <InputDate
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        key={item.id}
                        onChange={onChangeInput}
                        disabled={edit}
                    />
                );
            } else if (item.type === "time") {
                return (
                    <InputTime
                        name={item.name}
                        value={item.value}
                        label={item.label}
                        key={item.id}
                        onChange={onChangeInput}
                        disabled={edit}
                    />
                );
            }
        });
    };
    return (
        <div
            style={{ width: "30%", marginBottom: "100px", marginRight: "20px" }}
        >
            <h2 style={{ textAlign: "center" }}>{edit ? "Detail" : "Edit"}</h2>
            <Button
                type="primary"
                size="large"
                onClick={() => setEdit(false)}
                style={{ margin: "20px 0" }}
            >
                Edit
            </Button>
            <form>
                {renderInput()}
                {edit ? null : (
                    <>
                        <Edit
                            data={taskDetailData}
                            edit={edit}
                            setEdit={setEdit}
                        />
                        <Button
                            type="primary"
                            style={{ marginTop: "20px", marginLeft: "15px" }}
                            onClick={() => setEdit(!edit)}
                            size="large"
                        >
                            Cancel
                        </Button>
                    </>
                )}
            </form>
        </div>
    );
}

export default FormTask;
