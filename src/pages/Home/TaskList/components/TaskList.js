import Detail from "common/Detail/index";
import React from "react";
import { Table, Space } from "antd";

function TaskList({ taskData, type, isLoading }) {
    const { Column } = Table;
    return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{ flex: "1" }}>
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Id</th>
                                <th className="text-center">Task Name</th>
                                <th className="text-center">Time</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {taskData.map((item) => (
                                <tr key={item.id} style={{ cursor: "pointer" }}>
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">{item.taskName}</td>
                                    <td className="text-center">{item.time}</td>
                                    <td className="text-center">
                                        <Detail type={type} task={item} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        // <Table dataSource={taskData} loading={isLoading} style={{ flex: "1" }}>
        //     <Column title="Id" dataIndex="id" key="id" />
        //     <Column title="Task Name" dataIndex="taskName" key="taskName" />
        //     <Column title="Time" dataIndex="time" key="time" />
        //     <Column
        //         title="Action"
        //         key="action"
        //         render={(item) => (
        //             <Space size="middle">
        //                 <Detail type={type} task={item} />
        //             </Space>
        //         )}
        //     />
        // </Table>
    );
}

export default TaskList;
