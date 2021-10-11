import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export function withAddInput(WrappedComponent, func) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleAddFieldHead = this.handleAddFieldHead.bind(this);
            this.handleAddNewField = this.handleAddNewField.bind(this);
            this.handleRemoveField = this.handleRemoveField.bind(this);
            this.handleAddCurrentField = this.handleAddCurrentField.bind(this);
            this.handleConfirmField = this.handleConfirmField.bind(this);
            this.handleAction = this.handleAction.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.state = {
                inputFields: [],
                actionType: "",
                isOpen: false,
            };
        }

        // Handle remove field
        handleRemoveField = (id) => {
            const values = [...this.state.inputFields];
            const index = values.findIndex((item) => item.key === id);
            if (index !== -1) {
                values.splice(index, 1);
            }
            this.setState({
                inputFields: values,
            });
        };

        // Handle add field
        handleAddNewField = (field) => {
            const newInputFields = [...this.state.inputFields];
            const newField = {
                key: `${field.type}${uuid()}`,
                name: `${field.label}${uuid()}`,
                label: field.label,
                type: field.type,
            };
            newInputFields.push(newField);
            this.setState({ inputFields: newInputFields });
        };

        // Handle add field at head
        handleAddFieldHead = (field) => {
            const newInputFields = [...this.state.inputFields];
            const newField = {
                key: `${field.type}${uuid()}`,
                name: `${field.label}${uuid()}`,
                label: field.label,
                type: field.type,
            };
            newInputFields.unshift(newField);
            this.setState({ inputFields: newInputFields });
        };

        // Handle add current field
        handleAddCurrentField = (field) => {
            const newInputField = [...this.state.inputFields];
            const newField = {
                key: `${field.type}-${uuid()}`,
                name: `${field.label}-${uuid()}`,
                label: field.label,
                type: field.type,
            };
            const index = newInputField.findIndex(
                (item) => item.key === field.key
            );
            if (index >= 0) {
                newInputField.splice(index + 1, 0, newField);
            }
            this.setState({ inputFields: newInputField });
        };

        // Handle confirm
        handleConfirmField = (value) => {
            if (this.state.actionType === "addField") {
                this.handleAddNewField(value);
            } else if (this.state.actionType === "addFieldAtHead") {
                this.handleAddFieldHead(value);
            }
            this.setState({ isOpen: false });
            // console.log(value);
        };

        // Handle action type
        handleAction = (action) => {
            this.setState({ isOpen: true });
            this.setState({ actionType: action });
        };
        // Handle close
        handleClose = () => {
            this.setState({ isOpen: false });
        };
        render() {
            return (
                <WrappedComponent
                    data={this.state.inputFields}
                    handleConfirmField={this.handleConfirmField}
                    handleAddCurrentField={this.handleAddCurrentField}
                    handleRemoveField={this.handleRemoveField}
                    handleAction={this.handleAction}
                    handleClose={this.handleClose}
                    isOpen={this.state.isOpen}
                    {...this.props}
                />
            );
        }
    };
}
