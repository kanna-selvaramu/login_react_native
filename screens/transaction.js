import React , { Component } from 'react';
import {
    Text, 
    View,
    Image,
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

class TransactionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccessful : false
        }
    }
    render()
    {   
        if(this.state.isSuccessful) {
            return(
                <View style = {styles.pageWrap}>
                    <Image
                        source={require('../assets/images/close_icon_small.png')}
                        style={styles.closeIcon}
                    />
                    <View style = {styles.contentWrap}>
                        <Image
                            source={require('../assets/images/infoSuccess.png')}
                            style={styles.responseIcon}
                        />
                        <Text style={styles.primaryDesc}>
                            Transaction Successful
                        </Text>
                        <Text style={styles.secDesc}>
                            Ref ID: 1234567
                        </Text>
                        <TouchableOpacity style={styles.primaryBtn}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryBtn}>
                            <Text style={styles.secondaryBtnText}>Share My Receipt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) 
        }
        else {
            return(
                <View style = {styles.pageWrap}>
                    <Image
                        source={require('../assets/images/calendarBackArrow.png')}
                        style={styles.backIcon}
                    />
                    <View style = {styles.contentWrap}>
                        <Image
                            source={require('../assets/images/FailureCross.png')}
                            style={styles.responseIconNeg}
                        />
                        <Text style={styles.primaryDesc}>
                            Oops! Sorry Ismail
                        </Text>
                        <Text style={styles.secDesc}>
                            The transaction is unsuccessful. 
                            Please try Again Later.
                        </Text>
                    </View>
                    <View style={styles.NegBtnWrap}>
                        <TouchableOpacity style={styles.primaryBtn}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    pageWrap : {
        flex: 1,
        padding: 25
    },
    primaryBtn : {
        borderRadius: 26,
        width: 241,
        height: 40, 
        marginTop: 58,
        justifyContent: 'center', 
        alignItems:'center',
        backgroundColor: 'rgb(255, 221, 0)'
    },
    secondaryBtn : {
        borderRadius: 26,
        width: 241,
        height: 40, 
        marginTop: 16,
        justifyContent: 'center', 
        alignItems:'center',
        backgroundColor: 'rgb(176, 186, 215)'
    },
    secondaryBtnText : {
        color: '#FFF'
    },
    backIcon : {
        height: 16,
        width: 9
    },
    contentWrap : {
        flex: 1,
        alignItems: 'center'
    },
    responseIcon : {
        height: 245,    
        width: 245, 
        marginTop: 75,
        marginBottom: 30
    },
    responseIconNeg : {
        height: 157,
        width: 157, 
        marginTop: 75,
        marginBottom: 30
    },
    primaryDesc : {
        color : '#000', 
        fontSize: 22, 
        fontWeight: "500", 
        paddingBottom: 10
    }, 
    secDesc : {
        color : 'rgb(111, 127, 175)', 
        fontSize: 16, 
        paddingLeft: 25, 
        paddingRight: 25
    }, 
    NegBtnWrap : {
        alignItems: 'center'
    }
});

export default TransactionScreen;