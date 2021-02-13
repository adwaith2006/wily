import React from 'react';
import { Text, KeyboardAvoidingView,View, TouchableOpacity, TextInput, Image, StyleSheet,  Alert } from 'react-native';
import * as firebase from 'firebase'
import db from '../config.js'
 
export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
         emailId:"",
         password:""
        }
    }
    login=async(email,password)=>{
      if(email && password){
        try{
            const response=await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
             this.props.navigation.navigate("Transaction")
            }
        }
        catch(error){
            switch (error.code) { case 'auth/user-not-found': Alert.alert("user dosen't exists");
             console.log("doesn't exist"); break;
              case 'auth/invalid-email': Alert.alert('incorrect email or password');
              console.log('invaild'); break;
        }
    
      }
    }
      else{
          Alert.alert("Enter Email And Password")
      }
    }

    render(){
        return(
         <KeyboardAvoidingView style={{
             alignItems:"center",
             marginTop:20
         }}>
           <View>
               
           <Image
                source={require("../assets/booklogo.jpg")}
                style={{width:250, height: 250}}/>   
              
               <TextInput
               style={{
                borderWidth:2,
                height:30,
                width:300,
                paddingLeft:10,
                marginTop:20
               }}
                placeholder="Enter Email Address"
                keyboardType="email-address"
                onChangeText={
                    (text)=>{
                       this.setState({
                           emailId:text,
                           
                       })

                       
                    }
                }/>
              <TextInput
               style={{
                borderWidth:2,
                height:30,
                width:300,
                paddingLeft:10,
                marginTop:20

               }}
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={
                    (text)=>{
                       this.setState({
                           password:text,
                           
                       })

                       
                    }
                }/>
                <TouchableOpacity style={styles.submitButton
                }
                onPress={()=>{
                    this.login(this.state.emailId,this.state.password)
                }}>
                
                    <Text>
                    Submit
                    </Text>
                </TouchableOpacity>
                
               </View>  
         </KeyboardAvoidingView>
        );
    }
}
const styles=StyleSheet.create({
    submitButton:{
        borderWidth:1,
        height:50,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        marginTop:20
      }
})