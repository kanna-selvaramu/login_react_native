import React , { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Feed from './feed';
import Home from './home';
import Search from './search';


const MainNavigator = createStackNavigator({
    HomeScreen: {
        screen: Home,
        headerTitleStyle: { 
            alignSelf: 'center'
        },
    },
    FeedScreen: {
        screen: Feed, 
        headerTitleStyle: { 
            alignSelf:"center", 
            flex:1, 
            color: '#FFF', 
            backgroundColor: 'blue' 
        },
    },
    SearchScreen: {
        screen: Search, 
        headerTitleStyle: { 
            alignSelf:"center", 
            flex:1, 
            color: '#FFF', 
            backgroundColor: 'blue' 
        },
    },
},  {
        initialRouteName: 'HomeScreen'
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;

/*class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style = {styles.PageWrap}>
                <Text>Welcome!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    PageWrap : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default AppContainer;*/