import React from "react";
import { useSelector } from "react-redux";
import FormTask from "./FormTask";
import TaskList from "./TaskList";
const Home = () => {
    const { detail } = useSelector((state) => state.TaskReducer);
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <TaskList />
                    {detail ? <FormTask /> : null}
                </div>
            </div>
        </div>
    );
};

export default Home;
