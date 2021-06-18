import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements'

export const MyHeader = props =>{
    return(
        <Header
        centerComponent={{text:props.title, style: {color: '#90A5A9', fontSize:20,fontWeight:"bold"}}}
        backgroundColor='yellow'/>
    )
}