import FakeStoreAPI from "../../services/FakeStoreAPI";
import {search} from "../../Utils";

export const fetchProductsByQuery = (text) => async dispatch => {
    const response = await FakeStoreAPI.get(`/products/`);
    const products = search(response.data, text);
    dispatch({type: "SET_PRODUCTS", payload: products})
}
