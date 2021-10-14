import React from "react";

import DayEdit from "common/DayEdit";
import TextEdit from "common/TextEdit";
import TimeFromTo from "common/TimeFromTo";

import { TYPE_FIELDS } from "../../assets/constants";

function TaskDetailViewFieldItem(props) {
    const { name, label, type, disabled } = props;

    const propsField = {
        name,
        label,
        disabled,
    };

    let field;
    switch (type) {
        case TYPE_FIELDS.TEXT:
            field = <TextEdit {...propsField} />;
            break;
        case TYPE_FIELDS.DATE:
            field = <DayEdit {...propsField} />;
            break;
        case TYPE_FIELDS.TIME_FROM_TO:
            field = <TimeFromTo {...propsField} />;
            break;
        default:
            break;
    }

    return <React.Fragment>{field}</React.Fragment>;
}

export default TaskDetailViewFieldItem;
