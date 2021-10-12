import moment from "moment";

export const DETAIL = "DETAIL";
export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

// export const LOGIN_REQUEST ="LOGIN_REQUEST"
// export const LOGIN_SUCCESS ="LOGIN_SUCCESS"
// export const LOGIN_FAILURE ="LOGIN_FAILURE"

export const BASE_URL = "https://6155898393e3550017b08a76.mockapi.io/task";

// Handle format time
export const formatTime = (time) => moment(time).format("HH:mm:ss");

// Handle format date
export const formatDate = (date) => moment(date).format("DD/MM/YYYY");
