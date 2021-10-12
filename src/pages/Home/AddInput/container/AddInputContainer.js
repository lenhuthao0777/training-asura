import React, { Component } from "react";

export function withAddInput(WrappedComponent) {
    return class extends Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
