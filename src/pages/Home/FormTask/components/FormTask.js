import Edit from "common/Edit";
import React, { useState } from "react";
import "../assets/style.scss";
function FormTask({ taskDetailData, setTaskDetailData }) {
    const [edit, setEdit] = useState(true);
    // const [value, setValue] = useState({});

    // Handle change input
    const onChangeInput = (e) => {
        const newData = { ...taskDetailData };
        newData[e.target.name] = e.target.value;
        setTaskDetailData(newData);
    };
    // Array input
    const input = [
        {
            id: 1,
            label: "Id",
            name: "id",
            type: "number",
            disable: "true",
            value: taskDetailData.id || "",
        },
        {
            id: 2,
            label: "Task Name",
            name: "taskName",
            type: "text",
            disable: "false",
            value: taskDetailData.taskName || "",
        },
        {
            id: 3,
            label: "Time",
            name: "time",
            type: "time",
            disable: "false",
            value: taskDetailData.time || "",
        },
        {
            id: 4,
            label: "Name",
            name: "name",
            type: "text",
            disable: "false",
            value: taskDetailData.name || "",
        },
        {
            id: 5,
            label: "Date Of Birth",
            name: "dateOfBirth",
            type: "date",
            disable: "false",
            value: taskDetailData.dateOfBirth || "",
        },
        {
            id: 6,
            label: "Address",
            name: "address",
            type: "text",
            disable: "false",
            value: taskDetailData.address || "",
        },
        {
            id: 7,
            label: "Phone",
            name: "phone",
            type: "text",
            disable: "false",
            value: taskDetailData.phone || "",
        },
        {
            id: 8,
            label: "Email",
            name: "email",
            type: "email",
            disable: "false",
            value: taskDetailData.email || "",
        },
        {
            id: 9,
            label: "Current Job",
            name: "currentJob",
            type: "text",
            disable: "false",
            value: taskDetailData.currentJob || "",
        },
        {
            id: 10,
            label: "Experience",
            name: "experience",
            type: "text",
            disable: "false",
            value: taskDetailData.experience || "",
        },
        {
            id: 11,
            label: "Note",
            name: "note",
            type: "text",
            disable: "false",
            value: taskDetailData.note || "",
        },
    ];
    return (
        <div style={{ width: "30%", marginBottom: "100px" }}>
            <h2 style={{ textAlign: "center" }}>{edit ? "Detail" : "Edit"}</h2>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setEdit(false)}
                style={{ margin: "20px 0" }}
            >
                Edit
            </button>
            <form>
                {input.map((input) => {
                    if (edit === true) {
                        return (
                            <div className="form-group" key={input.id}>
                                <label htmlFor="exampleInputEmail1">{input.label}:</label>
                                <input
                                    type={input.type}
                                    value={input.value}
                                    name={input.name}
                                    disabled
                                    onChange={onChangeInput}
                                    className="form-control"
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div className="form-group" key={input.id}>
                                <label htmlFor="exampleInputEmail1">{input.label}:</label>
                                <input
                                    type={input.type}
                                    value={input.value}
                                    name={input.name}
                                    onChange={onChangeInput}
                                    className="form-control"
                                />
                            </div>
                        );
                    }
                })}

                {edit ? null : (
                    <>
                        <Edit data={taskDetailData} edit={edit} setEdit={setEdit} />
                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{ marginTop: "20px", marginLeft: "15px" }}
                            onClick={() => setEdit(!edit)}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}

export default FormTask;
