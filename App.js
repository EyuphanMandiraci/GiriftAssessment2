import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import {capitalizeWords} from "./Utils";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import 'react-native-gesture-handler';
import HomeScreen from "./screens/HomeScreen";



const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ProductsScreen" component={ProductsScreen} options={({route}) => ({title: capitalizeWords(route.params.category)})}/>
          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{title: "Product Details"}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
