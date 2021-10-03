import AppHeader from "components/Header";
import TaskList from "pages/Home/TaskList";
import React from "react";
const AppLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <div className="row">
                <TaskList />
                {children}
            </div>
        </>
    );
};

export default AppLayout;
