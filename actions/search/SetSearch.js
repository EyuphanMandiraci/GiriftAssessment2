export const setSearch = (text) => async dispatch => {
    dispatch({type: "SET_SEARCH", payload: text})
}
