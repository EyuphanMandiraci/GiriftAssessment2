import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CategoriesScreen from "./CategoriesScreen";
import SearchScreen from "./SearchScreen";
import {Icon} from "@rneui/base";


const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Categories" component={CategoriesScreen} options={{
                tabBarIcon: ({color}) => { return <Icon name="category" color={color}/> }
            }}/>
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({color}) => {return <Icon name="search" color={color}/>}
            }}/>
        </Tab.Navigator>
    )
}

export default HomeScreen;
