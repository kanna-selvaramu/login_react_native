import React , { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedTab : true,
            searchTab : false
        }
        this.onPress = this.onPress.bind(this); 
    }
    onPress(screenName) {
        if(screenName == "FeedScreen") {
            this.setState({
                feedTab : true,
                searchTab : false
            });
        }
        else {
            this.setState({
                feedTab : false,
                searchTab : true
            });
        }
        this.props.navigation(screenName);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.footerWrap}>
                <TouchableOpacity style={(this.state.feedTab == true) ? styles.secondaryBtn : styles.primaryBtn} onPress={() => this.onPress("FeedScreen")}>
                    <Text style={(this.state.feedTab == true) ? styles.secondaryBtnText : styles.primaryBtnText}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(this.state.searchTab == true) ? styles.secondaryBtn : styles.primaryBtn} onPress={() => this.onPress("SearchScreen")}>
                    <Text  style={(this.state.searchTab == true) ? styles.secondaryBtnText : styles.primaryBtnText}>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerWrap : {
        flex: 1,
        flexDirection: 'row'
    }, 
    secondaryBtn : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    }, 
    primaryBtn : {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    primaryBtnText : {
        color: 'black', 
        textAlign : 'center', 
        fontSize : 15,
        fontWeight : '500'
    },
    secondaryBtnText : {
        color : '#FFF',
        textAlign : 'center', 
        fontSize : 15,
        fontWeight : '500'
    }
})

export default Footer;