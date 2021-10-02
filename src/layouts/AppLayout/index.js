import AppHeader from "components/Header";
import React from "react";
const AppLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            {children}
        </>
    );
};

export default AppLayout;
