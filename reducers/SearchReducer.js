export default (state = "", action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return action.payload;
        case "CLEAR_SEARCH":
            return "";
        default:
            return state;
    }
}
