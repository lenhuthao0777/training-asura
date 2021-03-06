import { Button, Space, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import withTaskList from "../container/TaskListContainer";
import Delete from "./DeleteTask";

function TaskList({ data, isLoading }) {
    const { Column } = Table;
    return (
        <div className="container">
            <Table
                dataSource={data}
                loading={isLoading}
                style={{ flex: "1", margin: "0 20px" }}
            >
                <Column title="Id" dataIndex="id" key="id" />
                <Column title="Task Name" dataIndex="taskName" key="taskName" />
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
                                <Button type="primary">Detail</Button>
                            </Link>
                            <Link to="dynamic">
                                <Button type="primary">Dynamic Forms</Button>
                            </Link>
                            <Delete id={item.id} />
                        </Space>
                    )}
                />
            </Table>
        </div>
    );
}

export default withTaskList(TaskList);
