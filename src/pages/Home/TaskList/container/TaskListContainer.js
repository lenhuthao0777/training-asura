import moment from "moment";
import React, { Component } from "react";
import API from "services/Client";
import { v4 as uuid } from "uuid";
export default function withTaskList(WrappedComponent) {
    return class TaskListContainer extends Component {
        constructor(props) {
            super(props);
            this.state = {
                taskData: [],
                isLoading: false,
            };
        }
        fetchData = () => {
            this.setState({ isLoading: true });
            API.getAllData((data) => {
                // Format data
                const newTaskData = data.map((item) => ({
                    id: item.id,
                    taskName: item.taskName,
                    // time: item.time,
                    time: moment(item.time).format("HH:mm:ss"),
                    name: item.name,
                    // dateOfBirth: item.dateOfBirth,
                    dateOfBirth: moment(item.dateOfBirth).format("YYYY-MM-DD"),
                    address: item.address,
                    phone: item.phone,
                    email: item.email,
                    currentJob: item.currentJob,
                    experience: item.experience,
                    note: item.note,
                    key: uuid(),
                    idCard: item.idCard,
                    workStartTime: moment(item.workStartTime).format(
                        "HH:mm:ss"
                    ),
                    workFinishTime: moment(item.workFinishTime).format(
                        "HH:mm:ss"
                    ),
                }));
                this.setState({ taskData: newTaskData });
            }).finally(() => {
                this.setState({ isLoading: false });
            });
        };
        componentDidMount() {
            this.fetchData();
        }
        render() {
            return (
                <WrappedComponent
                    taskData={this.state.taskData}
                    isLoading={this.state.isLoading}
                    {...this.props}
                />
            );
        }
    };
}
