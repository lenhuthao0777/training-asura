import React from "react";
import Detail from "../components/Detail";
import PropTypes from "prop-types";

function DetailContainer({ id }) {
    return <Detail id={id} />;
}

export default DetailContainer;
Detail.propTypes = {
    id: PropTypes.string,
    onHandleDetail: PropTypes.func,
};
