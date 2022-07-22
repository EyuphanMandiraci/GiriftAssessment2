import {ActivityIndicator, StyleSheet, View} from "react-native";
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSingleProduct} from "../actions/single_product_detail/FetchSingleProduct";
import {deleteProduct} from "../actions/single_product_detail/DeleteProduct";
import ProductDetailComponent from "../components/ProductDetailComponent";
import CategoryListComponent from "../components/CategoryListComponent";

const ProductDetailScreen = ({route, fetchSingleProduct, product, deleteProduct}) => {
    useEffect(() => {
        deleteProduct();
        fetchSingleProduct(route.params.product_id);
    }, [])


    return (
        <View>
            {Object.keys(product).length === 0?<ActivityIndicator size={100}/>:<ProductDetailComponent product={product}/>}
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
    return { product: state.product_detail };
}

export default connect(
    mapStateToProps,
    {fetchSingleProduct, deleteProduct}
)(ProductDetailScreen)
