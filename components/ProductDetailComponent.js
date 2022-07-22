import {Dimensions, Image, ScrollView, View} from "react-native";
import {capitalizeWords} from "../Utils";
import {Card} from "@rneui/themed";
import {Text} from "@rneui/base";


const ProductDetailComponent = ({product}) => {
        return (
            <View>
                <Image source={{ uri: product.image }} style={{width: '100%', height: Dimensions.get("window").height/3, resizeMode: "stretch"}}/>
                <ScrollView>
                    <Card>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.FeaturedSubtitle style={{color: "black"}}>{capitalizeWords(product.category)}</Card.FeaturedSubtitle>
                            <Text style={{marginTop: '5%'}}>
                                {product.description}
                            </Text>
                            <Text style={{marginTop: '5%'}}>Price: ${product.price}</Text>
                    </Card>
                </ScrollView>
            </View>
        );

}

export default ProductDetailComponent;
