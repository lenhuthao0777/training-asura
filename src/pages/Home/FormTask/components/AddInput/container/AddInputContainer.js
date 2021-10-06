import React, { useState } from "react";
import AddInput from "../components/AddInput";
import Input from "../../Input/index";
import InputTime from "../../InputTime";
import InputDate from "../../InputDate";
import { Button, Row } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuid } from "uuid";
function AddInputContainer(edit) {
    const [open, setOpen] = useState(false);
    const [inputFields, setInputFields] = useState([{}]);
    // const [newField, setNewField] = useState([{}]);

    // Handle add field----------------------------------------
    const handleAddNewField = (newField) => {
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
    // Render Current field-----------------------------------------
    // const renderCurrentField = (field)=>{
    //   return field.map((item=>{
    //     if(item.type === "text"){
    //       return
    //     }
    //   }))
    // }

    // Handle confirm ----------------------------------------------
    const onFinish = (values) => {
        const newValues = {
            key: `${values.type}${uuid()}`,
            name: values.label,
            label: values.label,
            type: values.type,
        };
        handleAddNewField(newValues);
        setOpen(false);
    };

    // Handle add current field
    const addCurrentField = (field) => {
        const newField = {
            key: `${field.type}${uuid()}`,
            name: field.label,
            label: field.label,
            type: field.type,
        };
        setInputFields([...inputFields, newField]);
    };
    //Render field
    const renderNewInputField = () =>
        inputFields.map((item) => {
            if (item.type === "text") {
                return (
                    <Row key={item.key} style={{ flexWrap: "nowrap" }}>
                        <Input
                            name={item.name}
                            label={item.label}
                            disabled={edit.edit}
                        />
                        <Button
                            type="primary"
                            onClick={() => handleRemoveField(item.key)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <MinusCircleOutlined />
                        </Button>
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
                        <Button
                            type="primary"
                            onClick={() => handleRemoveField(item.key)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <MinusCircleOutlined />
                        </Button>
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
                        <Button
                            type="primary"
                            onClick={() => handleRemoveField(item.key)}
                            style={{ marginLeft: "10px" }}
                            disabled={edit.edit}
                        >
                            <MinusCircleOutlined />
                        </Button>
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
    return (
        <AddInput
            open={open}
            setOpen={setOpen}
            onFinish={onFinish}
            renderNewInputField={renderNewInputField}
            edit={edit.edit}
        />
    );
}

export default AddInputContainer;
