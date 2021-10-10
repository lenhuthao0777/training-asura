import { Button, Form, Input, Row, Select } from "antd";
import AddFiled from "./AddField";
import AddFieldAtHead from "./AddFieldAtHead";

function AddInput({
    onFinish,
    renderNewInputField,
    open,
    setOpen,
    setActionType,
    inputFields,
}) {
    const { Option } = Select;
    // Handle action type
    let handleAction = (action) => {
        setOpen(true);
        setActionType(action);
    };
    return (
        <div className="container">
            <Form
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                autoComplete="off"
                style={{ width: "40%" }}
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

                    <Row style={{ margin: " 20px 0" }}>
                        <AddFiled handleAction={handleAction} open={open} />
                        <AddFieldAtHead
                            handleAction={handleAction}
                            inputFields={inputFields}
                            open={open}
                        />
                    </Row>
                    {inputFields.length > 0 ? (
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    ) : null}
                </>
            </Form>
        </div>
    );
}

export default AddInput;
