import React, {Component,useState} from 'react'
import {StyleSheet,TextInput,TouchableOpacity,View,Text} from 'react-native'
import { auth } from '../firebase/config'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'

export const Register= ()=>{
    const[form,setForm]=useState({username:"",email:"",password:"",confirmPass:""})
    const[error,setError] = useState("")


    const handlePress=()=>{

        createUserWithEmailAndPassword(auth,form.email,form.password)
        .then((userCredential) => {
            //Inicio session user
            const user=userCredential.user;
            //generate display and username
            updateProfile(auth.currentUser,{displayName: form.username })
        .then(response => console.log(response) )
        .catch(error => setError(error))
        .finaly( () => { alert("User Created") });
        })
        .catch((error) => {
            const errorCode=error.code;
            const errorMessage=error.message;
            console.log(console.log(errorCode,errorMessage))
            console.log("error")
            setError({error})
        });

    }
    console.log(form)




    return(
        <View style={styles.container}>
            <TextInput  style={styles.input} 
                        placeholder="username"
                        blurOnSubmit={true}
                        onChangeText={text=>setForm({...form,username:text})}
                        value={form.username}> 
            </TextInput>
           
            <TextInput  style={styles.input} 
                        placeholder="Email"
                        blurOnSubmit={true}
                        textContentType="emailAddress"
                        onChangeText={text=>setForm({...form,email:text})}
                        value={form.email}> 
            </TextInput>

            <TextInput  style={styles.input} 
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={text=>setForm({...form,password:text})}
                        value={form.password}> 
            </TextInput>

            <TextInput  style={styles.input} 
                        placeholder="Confirm password"
                        secureTextEntry={true}
                        onChangeText={text=>setForm({...form,confirmPass:text})}
                        value={form.confirmPass}> 
            </TextInput>
            {error !=="" && <Text>{error.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={()=>handlePress()}>
                <Text style={styles.textButton}>
                Register
                </Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor:"#EADCA6",
        alignItems: 'center'
    },
    input: {
        padding: 10,
        width: '80%',
        backgroundColor: "#212121",
        borderColor: "white",
        borderWidth: 2,
        color: "#D9CAB3",
        marginVertical: 4,
        fontFamily: 'Oswald'
    },
    button: {
        marginTop: 30,
        padding: 10,
        width: '40%',
        backgroundColor: "#6D9886",
        justifyContent: "center",
        borderRadius: 5,
        textAlign: "center",
        height: 80,
    },
    textButton: {
        fontSize: 25,
        color: "#212121",
    }
})
