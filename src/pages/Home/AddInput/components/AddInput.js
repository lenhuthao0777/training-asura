import { Button, Form, Input, Row, Select } from "antd";
import { withAddInput } from "../container/AddInputContainer";

function AddInput() {
    const { Option } = Select;
    // Handle action type
    // let handleAction = (action) => {
    //     setOpen(true);
    //     setActionType(action);
    // };
    return (
        <div className="container">
            <Form
                name="dynamic_form_nest_item"
                autoComplete="off"
                style={{ width: "40%" }}
            >
                <>
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
                                <Button type="primary">Cancel</Button>
                            </Form.Item>
                        </Row>
                    </>

                    {/* <Row style={{ margin: " 20px 0" }}>
                        <AddFiled handleAction={handleAction} open={open} />
                        <AddFieldAtHead
                            handleAction={handleAction}
                            inputFields={inputFields}
                            open={open}
                        />
                    </Row> */}

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </>
            </Form>
        </div>
    );
}

export default withAddInput(AddInput);
