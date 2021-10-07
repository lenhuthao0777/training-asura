import { Button, Form, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "services/Client";
import "../assets/style.scss";
import AddInput from "./AddInput";
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
    {
        id: 12,
        label: "Id Card",
        name: "idCard",
        type: "text",
    },
    {
        id: 13,
        label: "Work Start Time",
        name: "workStartTime",
        type: "time",
    },
    {
        id: 14,
        label: "Work Finish Time",
        name: "workFinishTime",
        type: "time",
    },
];
// Render form--------------------------------------
const CustomizedForm = ({ onChange, fields, edit, onFinish, setEdit }) => (
    <Form
        name="global_state"
        layout="vertical"
        fields={fields}
        onFinish={onFinish}
        onFieldsChange={(_, allFields) => {
            onChange(allFields);
        }}
    >
        <Row>
            {edit ? null : (
                <Form.Item style={{ marginRight: "20px" }}>
                    <Button type="primary" size="large" htmlType="submit">
                        Save Edit
                    </Button>
                </Form.Item>
            )}
            <Form.Item>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => setEdit(!edit)}
                >
                    {edit ? "EDIT" : "CANCEL"}
                </Button>
            </Form.Item>
        </Row>
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
    </Form>
);

function FormTask({ data, edit, setEdit }) {
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
                value: moment(values.time, "HH:mm:ss.SS"),
            },
            {
                name: ["dateOfBirth"],
                value: moment(values.dateOfBirth, "YYYY-MM-DD"),
            },
            {
                name: ["email"],
                value: values.email,
            },
            {
                name: ["idCard"],
                value: values.idCard,
            },
            {
                name: ["workStartTime"],
                value: moment(values.workStartTime, "HH:mm:ss"),
            },
            {
                name: ["workFinishTime"],
                value: moment(values.workFinishTime, "HH:mm:ss"),
            },
        ]);
    };

    // -------------------------------------
    useEffect(() => {
        setValueFields(data);
    }, [data]);
    // Handle change input----------------------------------
    const onFinish = (values) => {
        setEdit(true);
        const newValues = {
            ...values,
            time: values.time._d,
            dateOfBirth: values.dateOfBirth._d,
            workStartTime: values.workStartTime._d,
            workFinishTime: values.workFinishTime._d,
        };
        API.editData(values.id, newValues);
    };
    return (
        <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <h1 style={{ textAlign: "center" }}>{edit ? "DETAIL" : "EDIT"}</h1>
            <CustomizedForm
                fields={fields}
                onChange={(newFields) => {
                    setFields(newFields);
                }}
                edit={edit}
                onFinish={onFinish}
                setEdit={setEdit}
            />
            <AddInput edit={edit} />
        </div>
    );
}

export default FormTask;
