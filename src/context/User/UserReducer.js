import * as types from "../types";

const UserReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case types.GET_USERS:
            return { ...state, users: payload };

        case types.GET_PROFILE:
            return { ...state, selectedUser: payload };

        default:
            return { ...state }
    }
};

export default UserReducer;
