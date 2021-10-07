import React, { useEffect, useState } from "react";
import RemoveField from "../components/RemoveField";

function RemoveFieldContainer({ edit, setInputFields, inputFields, id }) {
    const [disabled, setDisabled] = useState(true);
    // Handle remove field---------------------------------------
    const handleRemoveField = () => {
        const values = [...inputFields];
        const index = values.findIndex((item) => item.key === id);
        if (index !== -1) {
            values.splice(index, 1);
        }
        setInputFields(values);
    };
    useEffect(() => {
        if (inputFields.length > 1 && edit === false) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [inputFields, edit]);
    return (
        <RemoveField
            disabled={disabled}
            handleRemoveField={handleRemoveField}
        />
    );
}

export default RemoveFieldContainer;
