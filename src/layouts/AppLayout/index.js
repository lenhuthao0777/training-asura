import AppHeader from "components/Header";
import React from "react";
const AppLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <div>{children}</div>
        </>
    );
};

export default AppLayout;
