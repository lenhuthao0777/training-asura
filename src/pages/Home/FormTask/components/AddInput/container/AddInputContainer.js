import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Row } from "antd";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "../../Input/index";
import InputDate from "../../InputDate";
import InputTime from "../../InputTime";
import AddInput from "../components/AddInput";
import RemoveField from "../components/RemoveField";
function AddInputContainer(edit) {
    const [open, setOpen] = useState(false);
    const [inputFields, setInputFields] = useState([]);
    const [actionType, setActionType] = useState();
    // Handle add field----------------------------------------
    const handleAddNewField = (field) => {
        const newField = {
            key: `${field.type}${uuid()}`,
            name: field.label,
            label: field.label,
            type: field.type,
        };
        setInputFields([...inputFields, newField]);
    };
    // Handle remove field---------------------------------------
    const handleRemoveField = (key) => {
        const values = [...inputFields];
        const index = values.findIndex((item) => item.key === key);
        if (index !== -1) {
            values.splice(index, 1);
        }
        setInputFields(values);
    };

    // Handle add current field
    const addCurrentField = (field) => {
        const newInputField = [...inputFields];
        const newField = {
            key: `${field.type}-${uuid()}`,
            name: `${field.label}-${uuid()}`,
            label: field.label,
            type: field.type,
        };
        const index = newInputField.findIndex((item) => item.key === field.key);
        if (index >= 0) {
            newInputField.splice(index + 1, 0, newField);
        }
        setInputFields(newInputField);
    };
    // Handle add field at head
    const handleAddFieldHead = (field) => {
        const newInputField = [...inputFields];
        const newField = {
            key: `${field.type}${uuid()}`,
            name: field.label,
            label: field.label,
            type: field.type,
        };
        newInputField.unshift(newField);
        setInputFields(newInputField);
    };
    // Handle confirm ----------------------------------------------
    const onFinish = (value) => {
        if (actionType === "addField") {
            handleAddNewField(value);
        } else if (actionType === "addFieldAtHead") {
            handleAddFieldHead(value);
        }
        setOpen(false);
    };

    //Render field
    const renderNewInputField = () => {
        return inputFields.map((item) => {
            if (item.type === "text") {
                return (
                    <Row key={item.key} style={{ flexWrap: "nowrap" }}>
                        <Input
                            name={item.name}
                            label={item.label}
                            disabled={edit.edit}
                        />
                        {/* <Button
                            type="primary"
                            onClick={() => handleRemoveField(item.key)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <MinusCircleOutlined />
                        </Button> */}
                        <RemoveField
                            edit={edit}
                            setInputFields={setInputFields}
                            inputFields={inputFields}
                            key={item.key}
                            id={item.key}
                        />
                        <Button
                            type="primary"
                            onClick={() => addCurrentField(item)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <PlusOutlined />
                        </Button>
                    </Row>
                );
            } else if (item.type === "time") {
                return (
                    <Row key={item.key} style={{ flexWrap: "nowrap" }}>
                        <InputTime
                            name={item.name}
                            label={item.label}
                            disabled={edit.edit}
                        />
                        {/* <Button
                            type="primary"
                            onClick={() => handleRemoveField(item.key)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <MinusCircleOutlined />
                        </Button> */}
                        <RemoveField
                            edit={edit}
                            setInputFields={setInputFields}
                            inputFields={inputFields}
                            key={item.key}
                            id={item.key}
                        />
                        <Button
                            type="primary"
                            onClick={() => addCurrentField(item)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <PlusOutlined />
                        </Button>
                    </Row>
                );
            } else if (item.type === "date") {
                return (
                    <Row key={item.key} style={{ flexWrap: "nowrap" }}>
                        <InputDate
                            name={item.name}
                            label={item.label}
                            disabled={edit.edit}
                        />
                        {/* <Button
                            type="primary"
                            onClick={() => handleRemoveField(item.key)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <MinusCircleOutlined />
                        </Button> */}
                        <RemoveField
                            edit={edit}
                            setInputFields={setInputFields}
                            inputFields={inputFields}
                            key={item.key}
                            id={item.key}
                        />
                        <Button
                            type="primary"
                            onClick={() => addCurrentField(item)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <PlusOutlined />
                        </Button>
                    </Row>
                );
            }
        });
    };
    return (
        <AddInput
            open={open}
            setOpen={setOpen}
            onFinish={onFinish}
            renderNewInputField={renderNewInputField}
            edit={edit.edit}
            setActionType={setActionType}
        />
    );
}

export default AddInputContainer;
