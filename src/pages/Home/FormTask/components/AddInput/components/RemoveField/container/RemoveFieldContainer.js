import React from "react";
import RemoveField from "../components/RemoveField";

function RemoveFieldContainer({ edit, setInputFields, inputFields, id }) {
    // Handle remove field---------------------------------------
    const handleRemoveField = () => {
        const values = [...inputFields];
        const index = values.findIndex((item) => item.key === id);
        if (index !== -1) {
            values.splice(index, 1);
        }
        setInputFields(values);
    };
    return <RemoveField edit={edit} handleRemoveField={handleRemoveField} />;
}

export default RemoveFieldContainer;
