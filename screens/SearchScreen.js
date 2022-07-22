import {Icon, Input, Text} from "@rneui/base";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/products/FetchProducts";
import {deleteAllProducts} from "../actions/products/DeleteAllProducts";
import {useEffect} from "react";
import {clearSearch} from "../actions/search/ClearSearch";
import {setSearch} from "../actions/search/SetSearch";
import {ActivityIndicator, View} from "react-native";
import ProductListComponent from "../components/ProductListComponent";
import {fetchProductsByQuery} from "../actions/products/FetchProductsByQuery";
import {fetchAllProducts} from "../actions/products/FetchAllProducts";

const SearchScreen = ({products, fetchAllProducts, deleteAllProducts, setSearch, fetchProductsByQuery, clearSearch}) => {
    const onSearch = (text) => {
        setSearch(text);
        deleteAllProducts()
        fetchProductsByQuery(text)
    }
    useEffect(() => {
        clearSearch()
        deleteAllProducts()
        fetchAllProducts()
    }, [])
    return (
        <View>
            <Input placeholder="Search..." leftIcon={<Icon name="search"/>}  onSubmitEditing={event => onSearch(event.nativeEvent.text)}/>
            {products.length === 0?<ActivityIndicator size={100}/>:<ProductListComponent product_list={products}/>}
        </View>
    )
}



const mapStateToProps = (state) => {
    return { products: state.products };
}

export default connect(
    mapStateToProps,
    {fetchAllProducts ,fetchProductsByQuery, deleteAllProducts, clearSearch, setSearch}
)(SearchScreen)
