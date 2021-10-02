import Detail from "common/Detail/index";
import React from "react";

function TaskList({ taskData, type }) { 
    return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{ flex: "1" }}>
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
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
    );
}

export default TaskList;
