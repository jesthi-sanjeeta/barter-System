import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
{/*import Lottie from '../components/lottie';*/}
import db from '../config'


export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            contact: '',
            confirmpassword: '',
            isModalVisisble: false
        }
    }

    userlogin=async(email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate('Drawer')

        })
        .catch(error=>{
            return Alert.alert(error.message)
        })
        
    }

    usersignup=async(email, password, confirmpassword)=>{
        if(password!==confirmpassword){
            return Alert.alert('Both Password Do Not Match')
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            return Alert.alert(
                'Account Successfully Created',
                '',
                [
                    {
                        text:'OK',
                        onPress:()=>this.setState({
                            isModalVisisble:false,
                        })
                    }
                ]
                )
            
        })
        .catch(error=>{
            return Alert.alert(error.message)
        })

        db.collection('Users').add({
            FullName : this.state.firstname + '' + this.state.lastname,
            Contact : this.state.contact,
            Address : this.state.address,
            Email : this.state.email,
        })

        }
    }

    showModal=()=>{
        return(
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.state.isModalVisisble}>
                    <View style={styles.modalContainer}>
                        <ScrollView style={{width:'100%'}}>
                            <KeyboardAvoidingView >
                                <Text style={styles.modalTitle}>User SIGN UP</Text>
                                
                                <TextInput
                                style={styles.formTextInput}
                                placeholder='First Name'
                                maxLength={20}
                                onChangeText={(text)=>{
                                    this.setState({
                                        firstname:text
                                    })
                                }}/>

                                <TextInput
                                style={styles.formTextInput}
                                placeholder='Last Name'
                                maxLength={20}
                                onChangeText={(text)=>{
                                    this.setState({
                                        lastname:text
                                    })
                                }}/>

                                <TextInput
                                style={styles.formTextInput}
                                placeholder='Address'
                                multiline={true}
                                onChangeText={(text)=>{
                                    this.setState({
                                        address:text
                                    })
                                }}/>

                                <TextInput
                                style={styles.formTextInput}
                                placeholder='Contact No.'
                                keyboardType='numeric'
                                maxLength={10}
                                onChangeText={(text)=>{
                                    this.setState({
                                        contact:text
                                    })
                                }}/>

                                <TextInput
                                style={styles.formTextInput}
                                placeholder='E-mail'
                                keyboardType='email-address'
                                onChangeText={(text)=>{
                                    this.setState({
                                        email:text
                                    })
                                }}/>

                                <TextInput
                                style={styles.formTextInput}
                                secureTextEntry={true}
                                placeholder='Password'
                                onChangeText={(text)=>{
                                    this.setState({
                                        password:text
                                    })
                                }}/>

                                <TextInput
                                style={styles.formTextInput}
                                secureTextEntry={true}
                                placeholder='Confirm Password'
                                onChangeText={(text)=>{
                                    this.setState({
                                        confirmpassword:text
                                    })
                                }}/>

                                <View>
                                    <TouchableOpacity 
                                    style={styles.registerButton}
                                    onPress={()=>{
                                        this.usersignup(this.state.email, this.state.password, this.state.confirmpassword)
                                    }}>
                                        <Text style={styles.registerButtonText}>Register</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                    style={styles.registerButton}
                                    onPress={()=>{
                                        this.setState({
                                            isModalVisisble:false
                                        })
                                    }}>
                                        <Text style={styles.registerButtonText}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>

                                
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
            </Modal>
                
        )
    }
    render(){
        return(
            <View style={styles.container}>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    {this.showModal()}
                </View>

                <View>
                    {/*<Lottie/>*/}
                    <Text style={styles.title}>Barter</Text>
                    <Text style={styles.subtitle}>Welcome To Barter! Please Login To Continue</Text>
                </View>

               
                <View style={styles.buttonContainer}>

                    <TextInput 
                    keyboardType = 'email-address'
                    style={styles.loginBox}
                    placeholder = '123@example.com'
                    onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}/>

                    <TextInput
                    secureTextEntry = {true}
                    style={styles.loginBox}
                    placeholder = 'password'
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            this.userlogin(this.state.email, this.state.password)
                        }}>
                        <Text style={styles.buttonText}>LOG-IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                       this.setState({
                           isModalVisisble:true
                       })   
                    }}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container:{ 
        flex:1, 
        backgroundColor:'#9BCBE0' 
    }, 
    profileContainer:{ 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
    }, 
    title :{ 
        fontSize:65, 
        fontWeight:'300', 
        paddingBottom:30, 
        color : '#0F0849',
        marginTop :40,
        marginLeft: 20
    }, 
    subtitle :{ 
        fontSize:18,
        fontWeight:'bold', 
        paddingBottom:30, 
        color : '#367AB4',
        marginLeft: 20
    }, 
    loginBox:{ 
        width: 300, 
        height: 40, 
        borderBottomWidth: 1.5, 
        borderColor : '#3B5DA2', 
        fontSize: 20, 
        margin:10, 
        paddingLeft:10 
    },  
    button:{ 
        width:300, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#3B5DA2", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop: 50
    }, 
    buttonText:{ 
        color:'#ffff', 
        fontWeight: 'bold', 
        fontSize:20 
    }, 
    buttonContainer:{ 
        flex:1, 
        alignItems:'center' 
    },
    modalTitle :{ 
        justifyContent:'center', 
        alignSelf:'center', 
        fontSize:30, 
        color:'#0F0849', 
        margin:50 
    }, 
    modalContainer:{ 
        flex:1, 
        borderRadius:20, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:"#ffff", 
        marginRight:30, 
        marginLeft : 30, 
        marginTop:80, 
        marginBottom:80, 
    }, 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#3B5DA2', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10 
    }, 
    registerButton:{ 
        width:200, 
        height:40, 
        alignItems:'center', 
        justifyContent:'center', 
        borderWidth:1, 
        borderRadius:10,
        marginTop:30 
    }, 
    registerButtonText:{ 
        color:'#367AB4', 
        fontSize:15, 
        fontWeight:'bold',
    }, 
    cancelButton:{ 
        width:200, 
        height:30, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:5, 
    },
})
