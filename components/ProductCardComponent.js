import {TouchableOpacity, View} from "react-native";
import {Card, Text} from "@rneui/themed";


const ProductCardComponent = ({text, price, image_url, onPress}) => {
    return (
        <View style={{width: '48%', margin: '1%'}}>
            <TouchableOpacity onPress={onPress}>
                <Card>
                    <Card.Image source={{ uri: image_url }} />
                    <Card.Title>{text}</Card.Title>
                    <Text>${price}</Text>
                </Card>
            </TouchableOpacity>
        </View>
    );
}

export default ProductCardComponent;
