import React, { useState } from "react";
import AddInput from "../components/AddInput";
import Input from "../../Input/index";
import InputTime from "../../InputTime";
import InputDate from "../../InputDate";
import { Button, Row } from "antd";
function AddInputContainer(edit) {
    const [open, setOpen] = useState(false);
    const [inputFields, setInputFields] = useState([{}]);

    // Handle add field----------------------------------------
    const handleAdd = (newField) => {
        setInputFields([...inputFields, newField]);
    };
    // Handle remove field---------------------------------------
    const handleRemove = (key) => {
        const values = [...inputFields];
        const index = values.findIndex((item) => item.key === key);
        if (index !== -1) {
            values.splice(index, 1);
        }
        setInputFields(values);
    };

    // Handle confirm ----------------------------------------------
    const onFinish = (values) => {
        const newValues = {
            key: `${values.type}${values.label}`,
            name: values.label,
            label: values.label,
            type: values.type,
        };
        handleAdd(newValues);
        setOpen(false);
    };
    //
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
                            onClick={() => handleRemove(item.key)}
                            style={{ marginLeft: "10px" }}
                        >
                            Remove
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
                            onClick={() => handleRemove(item.key)}
                            style={{ marginLeft: "10px" }}
                        >
                            Remove
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
                            onClick={() => handleRemove(item.key)}
                            style={{ marginLeft: "10px" }}
                        >
                            Remove
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
