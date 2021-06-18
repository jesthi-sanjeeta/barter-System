import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Login extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    userlogin=(email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            return Alert.alert('Successful Login')
        })
        .catch(error=>{
            return Alert.alert(error.message)
        })
    }

    usersignup=(email, password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            return Alert.alert('User Added Successfully')
        })
        .catch(function(error){
            return Alert.alert(error.message)
        })
    }

   

    render(){
        return(
            <View >

                <Text style={styles.headertext}>Barter</Text>

                <Text style={{color:'#528aae', fontWeight:'bold'}}>Welcome To Barter! To continue please Login</Text>
                
                
                <TextInput
                style={styles.inputBox}
                keyboardType= 'email-address'
                placeholder='E-mail'
                onChangeText={(text)=>{
                    this.setState({
                        email:text
                    })
                }}/>

                <TextInput
                style={styles.inputBox}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}/>


                <TouchableOpacity 
                style={styles.button}
                onPress={()=>{
                    this.userlogin(this.state.email, this.state.password);
                }}>
                    <Text>LOG-IN</Text>
                </TouchableOpacity>
     
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.usersignup(this.state.email, this.state.password);
                }}
                >
                    <Text>SIGN UP</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bcd2e8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headertext: {
        fontSize: 50,
        color:'#001c57',
        paddingBottom: 30
    },
    inputBox: {
        borderColor:'#001b3a',
        borderBottomWidth:2,
        height:20,
        width:200,
        marginTop:30,
    },
    button: {
        width:225, 
        height:35, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#528aae", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop: 35
    }
  });
  