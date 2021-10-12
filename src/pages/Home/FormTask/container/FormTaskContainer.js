import React, { Component } from "react";
import API from "services/Client";

export default function withFormContainer(WrappedComponent) {
    return class FormTaskContainer extends Component {
        constructor(props) {
            super(props);
            this.getTaskById = this.getTaskById.bind(this);
            this.editData = this.editData.bind(this);
            this.state = {
                task: {},
            };
        }
        getTaskById = (id) => {
            API.getDataById(id, (data) => {
                this.setState({ task: data });
            });
        };
        editData(id, data) {
            API.editData(id, data);
        }
        render() {
            return (
                <WrappedComponent
                    getTaskById={this.getTaskById}
                    taskById={this.state.task}
                    editData={this.editData}
                    {...this.props}
                />
            );
        }
    };
}
