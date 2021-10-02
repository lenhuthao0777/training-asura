import { DETAIL, GET_DATA, UPDATE_DATA } from "constants/index";

const initialState = {
    taskData: [],
    taskDetail: {},
    detail: false,
};
export default function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case DETAIL:
            return { ...state, taskDetail: action.payload.task, detail: true };
        case GET_DATA:
            return { ...state, taskData: action.payload.data };
        case UPDATE_DATA:
            const updateData = action.payload.data;
            let index = state.taskData.findIndex((item) => item.id === updateData.id);
            if (index >= 0) {
                state.taskData[index] = updateData;
            }
            return { ...state };
        default:
            return state;
    }
}
