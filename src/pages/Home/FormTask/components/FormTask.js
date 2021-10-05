import { Button, Form } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "../assets/style.scss";
import Input from "./Input";
import InputDate from "./InputDate";
import InputTime from "./InputTime";

// Array input----------------------------
const input = [
    {
        id: 1,
        label: "Id",
        name: "id",
        type: "text",
    },
    {
        id: 2,
        label: "Task Name",
        name: "taskName",
        type: "text",
    },
    {
        id: 3,
        label: "Time",
        name: "time",
        type: "time",
    },
    {
        id: 4,
        label: "Name",
        name: "name",
        type: "text",
    },
    {
        id: 5,
        label: "Date Of Birth",
        name: "dateOfBirth",
        type: "date",
    },
    {
        id: 6,
        label: "Address",
        name: "address",
        type: "text",
    },
    {
        id: 7,
        label: "Phone",
        name: "phone",
        type: "text",
    },
    {
        id: 8,
        label: "Email",
        name: "email",
        type: "text",
    },
    {
        id: 9,
        label: "Current Job",
        name: "currentJob",
        type: "text",
    },
    {
        id: 10,
        label: "Experience",
        name: "experience",
        type: "text",
    },
    {
        id: 11,
        label: "Note",
        name: "note",
        type: "text",
    },
];
// Render form--------------------------------------
const CustomizedForm = ({ onChange, fields, edit, onFinish }) => (
    <Form
        name="global_state"
        layout="vertical"
        fields={fields}
        onFinish={onFinish}
        onFieldsChange={(_, allFields) => {
            onChange(allFields);
        }}
    >
        {input.map((item) => {
            if (item.type === "text") {
                return (
                    <Input
                        name={item.name}
                        label={item.label}
                        disabled={edit}
                        key={item.id}
                    />
                );
            } else if (item.type === "time") {
                return (
                    <InputTime
                        name={item.name}
                        label={item.label}
                        disabled={edit}
                        key={item.id}
                    />
                );
            } else if (item.type === "date") {
                return (
                    <InputDate
                        name={item.name}
                        label={item.label}
                        disabled={edit}
                        key={item.id}
                    />
                );
            }
        })}

        {edit ? null : (
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        )}
    </Form>
);

function FormTask({ data, edit, setEdit, onChange }) {
    const [fields, setFields] = useState([]);

    const setValueFields = (values) => {
        setFields([
            {
                name: ["id"],
                value: values.id,
            },
            {
                name: ["taskName"],
                value: values.taskName,
            },
            {
                name: ["name"],
                value: values.name,
            },
            {
                name: ["address"],
                value: values.address,
            },
            {
                name: ["phone"],
                value: values.phone,
            },
            {
                name: ["currentJob"],
                value: values.currentJob,
            },
            {
                name: ["experience"],
                value: values.experience,
            },
            {
                name: ["note"],
                value: values.note,
            },
            {
                name: ["time"],
                value: moment(values.time, "HH:mm:ss"),
            },
            {
                name: ["dateOfBirth"],
                value: moment(values.dateOfBirth, "DD-MM-YYYY"),
            },
            {
                name: ["email"],
                value: values.email,
            },
        ]);
    };

    // -------------------------------------
    useEffect(() => {
        // setDetailTask(data);
        setValueFields(data);
    }, [data]);
    return (
        <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center" }}>{edit ? "DETAIL" : "EDIT"}</h1>
            <Form.Item>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => setEdit(!edit)}
                >
                    {edit ? "EDIT" : "CANCEL"}
                </Button>
            </Form.Item>
            <CustomizedForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
                edit={edit}
                onFinish={onChange}
            />
        </div>
    );
}

export default FormTask;
