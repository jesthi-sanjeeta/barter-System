import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/header';

export default class Exchange extends React.Component{
    constructor(){
        super();
        this.state={
            itemname:'',
            description:'',
            userid:firebase.auth().currentUser.email
        }
    }

    addItem = () => {
        db.collection('Items').add({
            user_id:this.state.userid,
            item_name:this.state.itemname,
            description:this.state.description,
        })
    }

    render(){
        return(
            <View>
                {/*<MyHeader title='Request Book'/>*/}
                <KeyboardAvoidingView>

                    <TextInput
                    style={styles.formTextInput}
                    placeholder='Item Name'
                    onChangeText={(text)=>{
                        this.setState({
                            itemname:text
                        })
                    }}
                    />


                    <TextInput
                    style={[styles.formTextInput, {height:300}]}
                    multiline = {true}
                    placeholder='Description'
                    onChangeText={(text)=>{
                        this.setState({
                            description:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.addItem()}}>
                        <Text style={{color:'#FFFFFF'}}>Request</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    keyBoardStyle : { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    }, 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#3B5DA2', 
        borderRadius:10, 
        borderBottomWidth:1, 
        marginTop:20, 
        padding:10, 
    }, 
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#0A184D", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20,
        alignSelf:'center'
    },
 } )