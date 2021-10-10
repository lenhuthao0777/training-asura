import React, { useEffect, useState } from "react";
import AddField from "../components/AddField";

function AddFieldContainer({ handleAction, open }) {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (open === true) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [open]);
    return <AddField handleAction={handleAction} disabled={disabled} />;
}

export default AddFieldContainer;
