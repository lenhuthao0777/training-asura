import React, { useEffect, useState } from "react";
import AddFiledAtHead from "../components/AddFiledAtHead";

function AddFieldAtHeadContainer({ handleAction, inputFields, open }) {
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if (inputFields.length > 0 && open === false) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [open, inputFields.length]);

    return <AddFiledAtHead handleAction={handleAction} disabled={disabled} />;
}

export default AddFieldAtHeadContainer;
