import React, { Component } from "react";
import API from "services/Client";

export default function withFormContainer(WrappedComponent, fetchApi) {
    return class FormTaskContainer extends Component {
        constructor(props) {
            super(props);
            this.getTaskById = this.getTaskById.bind(this);
            this.state = {
                task: {},
            };
        }
        getTaskById = (id) => {
            API.getDataById(id, (data) => {
                this.setState({ task: data });
            });
        };
        render() {
            return (
                <WrappedComponent
                    getTaskById={this.getTaskById}
                    data={this.state.task}
                    {...this.props}
                />
            );
        }
    };
}
