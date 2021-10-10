import { Row } from "antd";
import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export function withAddInput(WrappedComponent, func) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                inputFields: [],
            };
        }
        // Handle remove field
        handleRemoveField = (id) => {
            const values = { ...this.state.inputFields };
            const index = values.indexOf(id);
            if (index !== -1) {
                values.splice(index, 1);
            }
            this.setState({ inputFields: values });
        };
        render() {
            console.log("handleRemoveField");
            return (
                <WrappedComponent
                    data={this.state.inputFields}
                    {...this.props}
                />
            );
        }
    };
}
