import { Button, Form, Row, Typography } from "antd";
import Input from "common/InputText";
import InputDate from "common/InputDate";
import InputTime from "common/InputTime";
import moment from "moment";
import React, { useEffect, useState } from "react";
import API from "services/Client";
import "../assets/style.scss";
import RangeTimePicker from "common/RangePickerInput";

function FormTask({ data, id }) {
    const [inputValue, setInputValue] = useState({
        // id: data.id,
        // taskName: data.taskName,
        // time: data.time,
        // name: data.name,
        // dateOfBirth: data.dateOfBirth,
        // address: data.address,
        // phone: data.phone,
        // email: data.email,
        // currentJob: data.currentJob,
        // experience: data.experience,
        // note: data.note,
        // idCard: data.idCard,
        // workStartTime: data.workStartTime,
        // workFinishTime: data.workFinishTime,
    });
    const [edit, setEdit] = useState(true);

    // Handle format time
    const formatTime = (time) => moment(time).format("HH:mm:ss");

    // Handle format date
    const formatDate = (date) => moment(date).format("DD/MM/YYYY");

    // -------------------------------------
    useEffect(() => {
        setInputValue(data);
    }, [data]);

    // Array input----------------------------
    const input = [
        {
            id: 1,
            label: "Id:",
            name: "id",
            type: "text",
            value: inputValue.id,
        },
        {
            id: 2,
            label: "Task Name:",
            name: "taskName",
            type: "text",
            value: inputValue.taskName,
        },
        {
            id: 3,
            label: "Time:",
            name: "time",
            type: "time",
            value: formatTime(inputValue.time),
        },
        {
            id: 4,
            label: "Name:",
            name: "name",
            type: "text",
            value: inputValue.name,
        },
        {
            id: 5,
            label: "Date Of Birth:",
            name: "dateOfBirth",
            type: "date",
            value: formatDate(inputValue.dateOfBirth),
        },
        {
            id: 6,
            label: "Address:",
            name: "address",
            type: "text",
            value: inputValue.address,
        },
        {
            id: 7,
            label: "Phone:",
            name: "phone",
            type: "text",
            value: inputValue.phone,
        },
        {
            id: 8,
            label: "Email:",
            name: "email",
            type: "text",
            value: inputValue.email,
        },
        {
            id: 9,
            label: "Current Job:",
            name: "currentJob",
            type: "text",
            value: inputValue.currentJob,
        },
        {
            id: 10,
            label: "Experience:",
            name: "experience",
            type: "text",
            value: inputValue.experience,
        },
        {
            id: 11,
            label: "Note:",
            name: "note",
            type: "text",
            value: inputValue.note,
        },
        {
            id: 12,
            label: "Id Card:",
            name: "idCard",
            type: "text",
            value: inputValue.idCard,
        },
        {
            id: 13,
            label: "Work Time:",
            name: ["workStartTime", "workFinishTime"],
            type: "timePicker",
            value: [
                formatTime(inputValue.workStartTime),
                formatTime(inputValue.workFinishTime),
            ],
        },
    ];

    // Handle change input----------------------------------
    const onFinish = () => {
        setEdit(true);
        // const newValues = {
        //     ...inputValue,
        //     time: inputValue.time._d,
        //     dateOfBirth: inputValue.dateOfBirth._d,
        //     workStartTime: inputValue.workStartTime._d,
        //     workFinishTime: inputValue.workFinishTime._d,
        // };
        // API.editData(inputValue.id, newValues);
        console.log(inputValue);
    };

    const onChangeInputText = (e) => {
        const newData = { ...inputValue };
        newData[e.target.name] = e.target.value;
        setInputValue(newData);
        // console.log(data);
    };
    function onChangeRangeTimePicker(dateString) {
        // setInputValue({
        //     ...inputValue,
        //     workStartTime: dateString[0],
        //     workFinishTime: dateString[1],
        // });
    }
    function onChangeDatePicker(dateString) {
        setInputValue({ ...inputValue, dateOfBirth: dateString });
    }
    function onChangeTimePicker(timeStrings) {
        setInputValue({ ...inputValue, time: timeStrings });
    }
    // Render form--------------------------------------
    const renderInput = () => (
        <>
            {input.map((item) => {
                switch (item.type) {
                    case "text":
                        return (
                            <Input
                                name={item.name}
                                label={item.label}
                                disabled={edit}
                                key={item.id}
                                value={item.value}
                                onChange={onChangeInputText}
                            />
                        );
                    case "time":
                        return (
                            <InputTime
                                name={item.name}
                                label={item.label}
                                disabled={edit}
                                key={item.id}
                                value={item.value}
                                onChange={onChangeTimePicker}
                            />
                        );
                    case "date":
                        return (
                            <InputDate
                                name={item.name}
                                label={item.label}
                                disabled={edit}
                                key={item.id}
                                value={item.value}
                                onChange={onChangeDatePicker}
                            />
                        );
                    case "timePicker":
                        return (
                            <RangeTimePicker
                                name={item.name}
                                label={item.label}
                                disabled={edit}
                                key={item.id}
                                value={item.value}
                                onChange={onChangeRangeTimePicker}
                            />
                        );
                    default:
                        break;
                }
            })}
        </>
    );
    return (
        <div
            style={{ width: "30%", display: "flex", flexDirection: "column" }}
            className="container"
        >
            <h1 style={{ textAlign: "center" }}>{edit ? "DETAIL" : "EDIT"}</h1>
            <Form
                name="global_state"
                layout="vertical"
                onFinish={onFinish}
                style={{ margin: "0 0 50px 0" }}
            >
                <Row>
                    {edit ? null : (
                        <Form.Item style={{ marginRight: "20px" }}>
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                            >
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
                {renderInput(edit)}
                {edit ? null : (
                    <Button type="primary" htmlType="submit" size="large">
                        Submit
                    </Button>
                )}
            </Form>
        </div>
    );
}

export default FormTask;
