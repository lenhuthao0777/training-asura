import { Button, Form, Row } from "antd";
import DayEdit from "common/DayEdit";
import TextEdit from "common/TextEdit";
import TimeFromTo from "common/TimeFromTo";
import { camelCase } from "lodash";
import NewFieldsInfo from "pages/Home/FormTask/components/NewFieldsInfo";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { withAddInput } from "../container/AddInputContainer";
function AddInput() {
    const [disabled, setDisabled] = useState(true);
    const [inputFields, setInputField] = useState([]);
    const [actionType, setActionType] = useState();
    const [isOpen, setIsOpen] = useState();
    const [key, setKey] = useState();

    useEffect(() => {
        if (isOpen === true) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [isOpen]);

    // Handle remove field
    const handleRemoveField = (id) => {
        const values = [...inputFields];
        const index = values.findIndex((item) => item.key === id);
        if (index !== -1) {
            values.splice(index, 1);
        }
        setInputField(values);
    };
    // Handle add field
    const handleAddNewField = (field) => {
        const newInputFields = [...inputFields];
        const newField = {
            key: uuid(),
            name: camelCase(field.label),
            label: field.label,
            type: field.type,
        };
        newInputFields.push(newField);
        setInputField(newInputFields);
    };
    // Handle add current field
    const handleAddCurrentField = (field) => {
        const newInputField = [...inputFields];
        const newField = {
            key: uuid(),
            name: camelCase(field.label),
            label: field.label,
            type: field.type,
        };
        const index = newInputField.findIndex((item) => item.key === key);
        if (index >= 0) {
            newInputField.splice(index + 1, 0, newField);
        }
        setInputField(newInputField);
    };
    // Handle confirm
    const handleConfirmField = (value) => {
        if (actionType === "addField") {
            handleAddNewField(value);
        }
        if (actionType === "addCurrentField") {
            handleAddCurrentField(value);
        }
        setIsOpen(false);
    };
    // Handle action type
    const handleAction = (action) => {
        setIsOpen(true);
        setActionType(action);
    };
    const handleActionKey = (action, key) => {
        setActionType(action);
        setKey(key);
        setIsOpen(true);
    };
    // Handle close
    const handleClose = () => {
        setIsOpen(false);
    };
    // render field
    const renderField = () => {
        // eslint-disable-next-line array-callback-return
        return inputFields.map((field) => {
            switch (field.type) {
                case "text":
                    return (
                        <Row key={field.key} style={{ flexWrap: "nowrap" }}>
                            <TextEdit name={field.label} label={field.label} />
                            <Button
                                onClick={() => handleRemoveField(field.key)}
                                type="dashed"
                            >
                                Remove
                            </Button>
                            <Button
                                type="dashed"
                                onClick={() =>
                                    handleActionKey(
                                        "addCurrentField",
                                        field.key
                                    )
                                }
                            >
                                Add
                            </Button>
                        </Row>
                    );
                case "date":
                    return (
                        <Row key={field.key} style={{ flexWrap: "nowrap" }}>
                            <DayEdit name={field.label} label={field.label} />
                            <Button
                                onClick={() => handleRemoveField(field.key)}
                                type="dashed"
                            >
                                Remove
                            </Button>
                            <Button
                                onClick={() =>
                                    handleActionKey(
                                        "addCurrentField",
                                        field.key
                                    )
                                }
                                type="dashed"
                            >
                                Add
                            </Button>
                        </Row>
                    );
                case "time":
                    return (
                        <Row key={field.key} style={{ flexWrap: "nowrap" }}>
                            <TimeFromTo
                                name={field.label}
                                label={field.label}
                            />
                            <Button
                                onClick={() => handleRemoveField(field.key)}
                                type="dashed"
                            >
                                Remove
                            </Button>
                            <Button
                                onClick={() =>
                                    handleActionKey(
                                        "addCurrentField",
                                        field.key
                                    )
                                }
                                type="dashed"
                            >
                                Add
                            </Button>
                        </Row>
                    );
                default:
                    break;
            }
        });
    };
    // Handle submit form
    const handleSubmitForm = (value) => {
        console.log(value);
    };
    return (
        <div
            className="container"
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1 style={{ margin: "20px 0" }}>Dynamic Form</h1>
            {inputFields.length > 0 ? (
                <Form
                    name="dynamic_form_nest_item"
                    autoComplete="off"
                    onFinish={handleSubmitForm}
                >
                    {renderField()}
                    {/* <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            ) : null}
            {isOpen === true ? (
                <NewFieldsInfo
                    handleFinish={handleConfirmField}
                    onCancel={handleClose}
                />
            ) : null}
            <Row style={{ margin: " 20px 0" }}>
                <Button
                    disabled={disabled}
                    onClick={() => handleAction("addField")}
                    type="primary"
                >
                    Add Field
                </Button>
            </Row>
        </div>
    );
}

export default withAddInput(AddInput);
