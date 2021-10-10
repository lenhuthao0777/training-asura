import { Button, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function TaskList({ taskData, isLoading }) {
    const { Column } = Table;
    return (
        <div className="container">
            <Table
                dataSource={taskData}
                loading={isLoading}
                style={{ flex: "1", margin: "0 20px" }}
            >
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Task Name" dataIndex="taskName" key="taskName" />
                <Column title="Time" dataIndex="time" key="time" />
                <Column
                    title="Date Of Birth"
                    dataIndex="dateOfBirth"
                    key="dateOfBirth"
                />
                <Column
                    title="Action"
                    key="action"
                    render={(item) => (
                        <Space size="middle">
                            <Link to={`/form-task/${item.id}`}>
                                <Button size="large" type="primary">
                                    Detail
                                </Button>
                            </Link>
                            <Link to="dynamic">
                                <Button size="large" type="primary">
                                    Dynamic Form
                                </Button>
                            </Link>
                        </Space>
                    )}
                />
            </Table>
        </div>
    );
}

export default TaskList;
