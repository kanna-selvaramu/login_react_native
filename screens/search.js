import React , { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Footer from './footer';

class Search extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.PageWrap}>
                <View style={styles.textWrap}>
                    <Text style={styles.text}>Search</Text>
                </View>
                <View style = {styles.footerContainer}>
                    <Footer navigation = {navigate}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    PageWrap : {
        flex: 1,
        flexDirection: 'column' , 
        justifyContent: 'flex-end'
    }, 
    textWrap : {
        flex: 1 ,
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    text: {
        fontSize: 20, 
        fontWeight: '500'
    }, 
    footerContainer: {
        height: 50
    }
})

export default Search;