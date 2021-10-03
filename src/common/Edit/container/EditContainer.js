import React from "react";
import API from "services/Client";
import Edit from "../components/Edit";
function EditContainer({ data, edit, setEdit }) {
  // Handle update data api and redux
    const onHandelEdit = () => {
        API.editData(data, data.id);
        setEdit(!edit);
        
    };
    return <Edit onHandelEdit={onHandelEdit} />;
}

export default EditContainer;
