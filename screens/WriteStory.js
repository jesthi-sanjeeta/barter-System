import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Write extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    submitStory=async()=>{
      var story;
      story=db.ref('Story1/');
      story.update({
        Title:{title},
        Author:{author},
        Story:{story}
      })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Story Hub</Text>


                <TextInput style={styles.inputBox} 
            placeholder= 'Story Title'
            onChangeText={(text)=>{
                this.setState({
                  title:text
                })
              }}  
              value = {this.state.title}/>


                <TextInput style={styles.inputBox} 
            placeholder= 'Author'
            onChangeText={(text)=>{
                this.setState({
                  author:text
                })
              }}  
              value = {this.state.author}/>


                <TextInput style={styles.writeStory} 
                multiline = {true}
            placeholder= 'Write Your Story...'
            onChangeText={(text)=>{
                this.setState({
                  story:text
                })
              }}  
              value = {this.state.story}/>
                
                <TouchableOpacity 
                onPress={this.submitStory}
                style={styles.submitButton}>
                  <Text>SUBMIT</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: { 
        width: 300, 
        height: 35, 
        borderWidth: 1.5, 
        borderRightWidth: 1.5, 
        fontSize: 15,
        marginTop: 25
    }, 
    writeStory: { 
        width: 300, 
        height: 275, 
        borderWidth: 1.5, 
        borderRightWidth: 1.5, 
        fontSize: 15,
        marginTop: 25,
    }, 
    submitButton: { 
        backgroundColor: "pink", 
        width: 100, 
        height: 25,
        alignItems: 'center',
        marginTop:70
    }, 
    header: {
        backgroundColor: "pink",
        width: 300,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
  });