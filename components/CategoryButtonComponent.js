import {View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon} from "@rneui/base";

const CategoryButtonComponent = ({text}) => {
    const navigation = useNavigation();
    return (
      <View>
          <Button type="outline" onPress={() => {navigation.navigate("ProductsScreen", {category: text})}}>
              <Icon name="category" color="blue"/>
              {text}
          </Button>
      </View>
    );
}

export default CategoryButtonComponent;
