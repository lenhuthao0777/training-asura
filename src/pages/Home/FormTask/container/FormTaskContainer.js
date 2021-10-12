import React, { Component } from "react";
import API from "services/Client";

export default function withFormContainer(WrappedComponent) {
    return class FormTaskContainer extends Component {
        constructor(props) {
            super(props);
            this.getDataById = this.getDataById.bind(this);
            this.editData = this.editData.bind(this);
            this.state = {
                task: {},
            };
        }
        getDataById = (id) => {
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
                    getDataById={this.getDataById}
                    taskById={this.state.task}
                    editData={this.editData}
                    {...this.props}
                />
            );
        }
    };
}
