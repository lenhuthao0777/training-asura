import React, { Component } from "react";
import API from "services/Client";

export default function withFormContainer(WrappedComponent) {
    return class FormTaskContainer extends Component {
        constructor(props) {
            super(props);
            this.getDataById = this.getDataById.bind(this);
            this.updateTaskById = this.updateTaskById.bind(this);
            this.state = {
                task: {},
                loading: true,
            };
        }
        getDataById = (id) => {
            this.setState({ loading: true });
            API.getDataById(id, (data) => {
                this.setState({ task: data });
            }).finally(() => {
                this.setState({ loading: false });
            });
        };
        updateTaskById(id, data) {
            API.editData(id, data);
        }

        render() {
            return (
                <WrappedComponent
                    getTaskById={this.getDataById}
                    taskById={this.state.task}
                    updateTaskById={this.updateTaskById}
                    loading={this.state.loading}
                    {...this.props}
                />
            );
        }
    };
}
