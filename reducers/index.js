import { combineReducers } from "redux";
import CategoriesReducer from "./CategoriesReducer";
import ProductsReducer from "./ProductsReducer";
import SingleProductDetailReducer from "./SingleProductDetailReducer";
import SearchReducer from "./SearchReducer";

export default combineReducers({
    categories: CategoriesReducer,
    products: ProductsReducer,
    product_detail: SingleProductDetailReducer,
    search: SearchReducer
})
