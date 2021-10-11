import React from "react";
import { Link } from "react-router-dom";
import "../assets/_Header.scss";
function AppHeader() {
    return (
        <div className="header">
            <div className="container">
                <h1>
                    <Link to="/">TASK LIST</Link>
                </h1>
            </div>
        </div>
    );
}

export default AppHeader;
