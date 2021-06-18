import React from 'react';
import LottieView from 'lottie-react-native';

export default class Lottie extends React.Component{
    render(){
        return(
            <LottieView
            style={{width:'50%', alignSelf:'center'}}
            /*{source={require('../assets/book.json')}}*/
            autoPlay loop/>
        )
    }
}