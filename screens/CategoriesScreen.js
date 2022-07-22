import {ActivityIndicator, StyleSheet, View} from "react-native";
import CategoryListComponent from '../components/CategoryListComponent';
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchCategories} from "../actions/categories/FetchCategories";



const CategoriesScreen = ({fetchCategories, categories}) => {
    useEffect(() => {
        fetchCategories();
    }, [])
        return (
            <View>
                {categories.length === 0?<ActivityIndicator size={100}/>:<CategoryListComponent category_list={categories}/>}
            </View>
        )
}

const mapStateToProps = (state) => {
    return { categories: state.categories };
}

export default connect(
    mapStateToProps,
    {fetchCategories}
)(CategoriesScreen)
