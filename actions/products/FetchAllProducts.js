import FakeStoreAPI from "../../services/FakeStoreAPI";

export const fetchAllProducts = () => async dispatch => {
    const response = await FakeStoreAPI.get(`/products/`);
    dispatch({type: "SET_PRODUCTS", payload: response.data})
}
