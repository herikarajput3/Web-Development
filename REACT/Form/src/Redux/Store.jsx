import { createStore } from "redux";
const reducer = (state = 0, action) => {

    switch (action.type) {
        case "INCREMENT":
            return state + 1
            break;

        default:
            return state
            break;
    }

}
export const store = createStore(reducer);