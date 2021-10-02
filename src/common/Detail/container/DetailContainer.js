import React from "react";
import { connect } from "react-redux";
import Detail from "../components/Detail";

function DetailContainer({ handleDetail, task, type }) {
    // const dispatch = useDispatch();
    // const handleDetail = () => {
    //     dispatch({
    //         type: type,
    //         payload: { task },
    //     });
    // };

    return <Detail onHandleDetail={() => handleDetail(task, type)} />;
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDetail: (task, type) => {
            dispatch({ type: type, payload: { task } });
        },
    };
};
export default connect(null, mapDispatchToProps)(DetailContainer);
