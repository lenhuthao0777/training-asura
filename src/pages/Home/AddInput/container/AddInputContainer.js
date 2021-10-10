import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "common/InputText/index";
import InputDate from "common/InputDate";
import InputTime from "common/InputTime";
import AddCurrentField from "../components/AddCurrentField";
import AddInput from "../components/AddInput";
import RemoveField from "../components/RemoveField";
function AddInputContainer() {
    const [open, setOpen] = useState(false);
    const [inputFields, setInputFields] = useState([]);
    const [actionType, setActionType] = useState();
    // const [edit, setEdit] = useState();
    // Handle add field
    const handleAddNewField = (field) => {
        const newField = {
            key: `${field.type}${uuid()}`,
            name: `${field.label}${uuid()}`,
            label: field.label,
            type: field.type,
        };
        setInputFields([...inputFields, newField]);
    };
    // // Handle remove field---------------------------------------
    // const handleRemoveField = (id) => {
    //     const values = [...inputFields];
    //     const index = values.findIndex((item) => item.key === id);
    //     if (index !== -1) {
    //         values.splice(index, 1);
    //     }
    //     setInputFields(values);
    // };

    // Handle add field at head
    const handleAddFieldHead = (field) => {
        const newInputField = [...inputFields];
        const newField = {
            key: `${field.type}${uuid()}`,
            name: `${field.label}${uuid()}`,
            label: field.label,
            type: field.type,
        };
        newInputField.unshift(newField);
        setInputFields(newInputField);
    };
    // Handle confirm
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
                    <div key={item.key}>
                        <Input name={item.name} label={item.label} />
                        <>
                            <RemoveField
                                setInputFields={setInputFields}
                                inputFields={inputFields}
                                key={item.key}
                                id={item.key}
                            />
                            <AddCurrentField
                                setInputFields={setInputFields}
                                inputFields={inputFields}
                                field={item}
                                id={item.key}
                            />
                        </>
                    </div>
                );
            }
            if (item.type === "time") {
                return (
                    <div key={item.key}>
                        <InputTime name={item.name} label={item.label} />

                        <>
                            <RemoveField
                                setInputFields={setInputFields}
                                inputFields={inputFields}
                                key={item.key}
                                id={item.key}
                            />
                            <AddCurrentField
                                setInputFields={setInputFields}
                                inputFields={inputFields}
                                field={item}
                                id={item.key}
                            />
                        </>
                    </div>
                );
            }
            if (item.type === "date") {
                return (
                    <div key={item.key}>
                        <InputDate name={item.name} label={item.label} />

                        <RemoveField
                            setInputFields={setInputFields}
                            inputFields={inputFields}
                            key={item.key}
                            id={item.key}
                        />
                        <AddCurrentField
                            setInputFields={setInputFields}
                            inputFields={inputFields}
                            field={item}
                            id={item.key}
                        />
                    </div>
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
            setActionType={setActionType}
            inputFields={inputFields}
        />
    );
}

export default AddInputContainer;
