import React, { Component } from 'react';
import Buffer from 'buffer';
import {  Text, View, StyleSheet, Image, TouchableHighlight, TextInput, ActivityIndicator, AsyncStorage } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "", 
            password : "", 
            showProgress : false, 
            error : false
        }
        this.onLoginPressed = this.onLoginPressed.bind(this);    }
    onLoginPressed() {
        console.log("Trying to login using " + this.state.userName + " " + this.state.password);
        var b = new Buffer.Buffer(this.state.userName + ':' + this.state.password);
        var encodedAuth = b.toString('base64');
        var onLoginSuccess = this.props.onLogin;
        this.setState({
            showProgress: true
        });
        fetch('https://api.github.com/user',{
            headers: {
                'Authorization' : 'Basic ' + encodedAuth
            }
        })
        .then((response) => {
            if(response.status >=200 && response.status < 300) {
                return response;
            }
            if(response.status == 401) {
                throw 'Bad Credentials';
            }
            throw 'Unknown error';
        })
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            console.log(results);
            AsyncStorage.multiSet([
                ['auth', encodedAuth], 
                ['user', JSON.stringify(results)]
            ], (err) => {
                if(err) {
                    throw err;
                }
            })
            if(onLoginSuccess) {
                onLoginSuccess();
            }
        })
        .catch((err) => {
            console.log('login failed ' + err);
            this.setState({
                error: true
            });
        })
        .finally(() => {
            this.setState({
                showProgress: false
            });
        });
    }

    render() {
        var errMessage = <View />;
        if(this.state.error) {
            errMessage = <Text style = {styles.errMessage}>Bad Credentials</Text>
        }
        return (
            <View style = {styles.LoginWrap}>
                <Image style = {styles.logimg}
                    source = { require('../assets/images/robot-dev.png') }
                />
                <Text style = {styles.heading}>Github Browser</Text>
                <View style = {styles.textWrap}>
                    <TextInput 
                        onChangeText = {(text) => {
                            this.setState({
                                userName: text
                            })
                        }} 
                        style = {styles.input} 
                        placeholder = "Your email address"
                    />
                    <TextInput 
                        onChangeText = {(text) => {
                            this.setState({
                                password: text
                            })
                        }} 
                        style = {styles.input} 
                        placeholder = "Your password"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableHighlight style = {styles.btnWrap} onPress = {() => this.onLoginPressed()}>
                    <Text style = {styles.btnText}> Log In </Text>
                </TouchableHighlight>
                { errMessage }
                <ActivityIndicator 
                    style = {styles.loadingGuage}
                    animating = {this.state.showProgress}
                    size = "large"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    LoginWrap : {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: 30
    }, 
    logimg : {
        marginBottom : 20
    },
    heading : {
        fontSize : 30, 
        paddingBottom: 15
    }, 
    input : {
        height: 40, 
        padding: 5,
        borderColor: 'skyblue',
        color: 'skyblue',
        fontSize: 20, 
        borderWidth: 1,
        marginBottom: 15
    }, 
    textWrap : {
        width: '90%'
    }, 
    btnWrap : {
        backgroundColor: 'skyblue',
        width: '90%', 
        padding: 10,
        alignItems: 'center', 
        height: 40
    }, 
    btnText: {
        color : '#FFF'
    },
    loadingGuage : {
        marginTop: 30
    }, 
    errMessage: {
        color: 'red',
        paddingTop: 20
    }
});

export default Login;