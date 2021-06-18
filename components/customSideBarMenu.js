import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBar extends React.Component{
    render(){
        return(
            <View style={styles.container} >
                <DrawerItems {...this.props} />
                <View style={styles.logOutContainer}>
                    <TouchableOpacity 
                    style={styles.logOutButton}
                    onPress={()=>{
                        this.props.navigation.navigate('Login')
                        firebase.auth().signOut()
                    }}>
                        <Text style={styles.logOutText}>Log-Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 

var styles = StyleSheet.create({ 
    container : { flex:1, marginTop:50 }, 
    drawerItemsContainer:{ flex:1 }, 
    logOutContainer : { flex:0.2, justifyContent:'flex-end', paddingBottom:30 }, 
    logOutButton : { height:30, width:'100%', justifyContent:'center', padding:10 }, 
    logOutText:{ fontSize: 30, fontWeight:'bold' } 
})
