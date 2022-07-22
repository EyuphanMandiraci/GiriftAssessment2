import {ActivityIndicator, StyleSheet, View} from "react-native";
import ProductListComponent from "../components/ProductListComponent";
import {useEffect} from "react";
import {fetchProducts} from "../actions/products/FetchProducts";
import {connect} from "react-redux";
import {deleteAllProducts} from "../actions/products/DeleteAllProducts";
import CategoryListComponent from "../components/CategoryListComponent";

const ProductsScreen = ({route, fetchProducts, products, deleteAllProducts}) => {
    useEffect(() => {
        deleteAllProducts();
        fetchProducts(route.params.category.toLowerCase());
    }, [])
    return (
        <View>
            {products.length === 0?<ActivityIndicator size={100}/>:<ProductListComponent product_list={products}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


const mapStateToProps = (state) => {
    return { products: state.products };
}

export default connect(
    mapStateToProps,
    {fetchProducts, deleteAllProducts}
)(ProductsScreen)
