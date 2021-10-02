import { UPDATE_DATA } from "constants/index";
import React from "react";
import { useDispatch } from "react-redux";
import API from "services/Client";
import Edit from "../components/Edit";
function EditContainer({ data, edit, setEdit }) {
    const dispatch = useDispatch();
  // Handle update data api and redux
    const onHandelEdit = () => {
        // console.log(data);
        API.editData(data, data.id);
        setEdit(!edit);
        dispatch({
            type: UPDATE_DATA,
            payload: {
                data: data,
            },
        });
    };
    return <Edit onHandelEdit={onHandelEdit} />;
}

export default EditContainer;
