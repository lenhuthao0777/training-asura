import React from "react";
import AddCurrentFiled from "../components/AddCurrentFiled";
import { v4 as uuid } from "uuid";

function AddCurrentFieldContainer({
    edit,
    setInputFields,
    inputFields,
    field,
}) {
    // Handle add current field
    const addCurrentField = () => {
        const newInputField = [...inputFields];
        const newField = {
            key: `${field.type}-${uuid()}`,
            name: `${field.label}-${uuid()}`,
            label: field.label,
            type: field.type,
        };
        const index = newInputField.findIndex((item) => item.key === field.key);
        if (index >= 0) {
            newInputField.splice(index + 1, 0, newField);
        }
        setInputFields(newInputField);
    };
    return <AddCurrentFiled edit={edit} addCurrentField={addCurrentField} />;
}

export default AddCurrentFieldContainer;
