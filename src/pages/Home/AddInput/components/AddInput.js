import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Row, Select, TimePicker } from "antd";
import { useEffect, useState } from "react";
import { withAddInput } from "../container/AddInputContainer";
function AddInput({
    data,
    handleConfirmField,
    handleAddCurrentField,
    handleRemoveField,
    handleAction,
    handleClose,
    isOpen,
}) {
    const { Option } = Select;

    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if (isOpen === true) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [isOpen]);
    const renderField = () => {
        // eslint-disable-next-line array-callback-return
        return data.map((field) => {
            switch (field.type) {
                case "text":
                    return (
                        <Row key={field.key} style={{ flexWrap: "nowrap" }}>
                            <Form.Item name={field.name} label={field.label}>
                                <Input placeholder={`Enter ${field.label}`} />
                            </Form.Item>
                            <Button
                                onClick={() => handleRemoveField(field.key)}
                            >
                                <MinusCircleOutlined />
                            </Button>
                            <Button
                                onClick={() => handleAddCurrentField(field)}
                            >
                                <PlusCircleOutlined />
                            </Button>
                        </Row>
                    );
                case "date":
                    return (
                        <Row key={field.key} style={{ flexWrap: "nowrap" }}>
                            <Form.Item name={field.label} label={field.label}>
                                <DatePicker />
                            </Form.Item>
                            <Button
                                onClick={() => handleRemoveField(field.key)}
                            >
                                <MinusCircleOutlined />
                            </Button>
                            <Button
                                onClick={() => handleAddCurrentField(field)}
                            >
                                <PlusCircleOutlined />
                            </Button>
                        </Row>
                    );
                case "time":
                    return (
                        <Row key={field.key} style={{ flexWrap: "nowrap" }}>
                            <Form.Item name={field.label} label={field.label}>
                                <TimePicker />
                            </Form.Item>
                            <Button
                                onClick={() => handleRemoveField(field.key)}
                            >
                                <MinusCircleOutlined />
                            </Button>
                            <Button
                                onClick={() => handleAddCurrentField(field)}
                            >
                                <PlusCircleOutlined />
                            </Button>
                        </Row>
                    );
                default:
                    break;
            }
        });
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
            {data.length > 0 ? (
                <Form name="dynamic_form_nest_item" autoComplete="off">
                    {renderField()}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            ) : null}
            {isOpen === true ? (
                <Form
                    name="dynamic_form_nest_item"
                    autoComplete="off"
                    onFinish={handleConfirmField}
                >
                    <Row>
                        <Form.Item name="label" label="Enter Label">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="type"
                            label="Type"
                            style={{ marginLeft: "10px" }}
                        >
                            <Select placeholder="Select Type">
                                <Option value="text">Text</Option>
                                <Option value="time">Time</Option>
                                <Option value="date">Date</Option>
                            </Select>
                        </Form.Item>
                    </Row>
                    <Row style={{marginLeft: "82px"}}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Confirm
                            </Button>
                        </Form.Item>
                        <Form.Item style={{ marginLeft: "20px" }}>
                            <Button onClick={handleClose} type="primary">
                                Cancel
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            ) : null}
            <Row style={{ margin: " 20px 0" }}>
                <Button
                    disabled={disabled}
                    onClick={() => handleAction("addField")}
                    type="primary"
                >
                    Add Field
                </Button>
                {data.length > 0 ? (
                    <Button
                        disabled={disabled}
                        onClick={() => handleAction("addFieldAtHead")}
                        style={{ marginLeft: "20px" }}
                        type="primary"
                    >
                        Add Field Head
                    </Button>
                ) : null}
            </Row>
        </div>
    );
}

export default withAddInput(AddInput);
