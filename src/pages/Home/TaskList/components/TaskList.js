import Detail from "common/Detail/index";
import React from "react";
import { Table, Space } from "antd";

function TaskList({ taskData, isLoading }) {
    const { Column } = Table;
    return (
        <Table dataSource={taskData} loading={isLoading} style={{ flex: "1", margin:"0 20px" }}>
            <Column title="Id" dataIndex="id" key="id" />
            <Column title="Task Name" dataIndex="taskName" key="taskName" />
            <Column title="Time" dataIndex="time" key="time" />
            <Column
                title="Action"
                key="action"
                render={(item) => (
                    <Space size="middle">
                        <Detail  id={item.id} />
                    </Space>
                )}
            />
        </Table>
    );
}

export default TaskList;
