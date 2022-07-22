import {FlatList, View} from "react-native";
import ProductCardComponent from "./ProductCardComponent";
import {useNavigation} from "@react-navigation/native";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";


const ProductListComponent = ({product_list}) => {
    const navigation = useNavigation();
    let tabBarHeight;
    try {
        tabBarHeight = useBottomTabBarHeight();
    }catch (e) {
        tabBarHeight = 0;
    }
    return (
        <View>
            <FlatList
                style={{marginBottom: tabBarHeight * 3.1}}
                numColumns={2}
                data={product_list}
                renderItem={({item}) => {
                    return <ProductCardComponent onPress={() => {navigation.navigate("ProductDetailScreen", {product_id: item.id})}} text={item.title} price={item.price} image_url={item.image} id={item.id}/>
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


export default ProductListComponent;
