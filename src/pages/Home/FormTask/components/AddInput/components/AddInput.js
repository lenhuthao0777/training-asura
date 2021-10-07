import { Button, Form, Input, Row, Select } from "antd";

function AddInput({
    onFinish,
    renderNewInputField,
    open,
    setOpen,
    edit,
    setActionType,
}) {
    const { Option } = Select;
    // Handle action type
    let handleAction = (action) => {
        setOpen(true);
        setActionType(action);
    };
    return (
        <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
        >
            {renderNewInputField()}
            <>
                {open ? (
                    <>
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
                        <Row>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Confirm
                                </Button>
                            </Form.Item>
                            <Form.Item style={{ marginLeft: "20px" }}>
                                <Button
                                    type="primary"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Row>
                    </>
                ) : null}
                {edit === true ? null : (
                    <Row>
                        <Form.Item style={{ marginRight: "10px" }}>
                            <Button
                                type="primary"
                                onClick={() => handleAction("addField")}
                            >
                                Add Field
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                onClick={() => handleAction("addFieldAtHead")}
                            >
                                Add Field At Head
                            </Button>
                        </Form.Item>
                    </Row>
                )}
            </>
        </Form>
    );
}

export default AddInput;
