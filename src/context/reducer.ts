import { State, Action } from "@/types";

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_MESSAGE: "SET_MESSAGE"
};


const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
    }
};

export default reducer;