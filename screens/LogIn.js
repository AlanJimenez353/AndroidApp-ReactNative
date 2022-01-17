import React, { useState } from 'react'
import { TextInput,StyleSheet,View,TouchableOpacity,Text } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';


export const Login= ()=>{

    const [form,setForm]=useState({email:"",password:""})
    const[error,setError]=useState("")

    const handleLogin=()=>{

        signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential);
            setForm({email: "", password: ""})
            // ...
        })
        .catch((error) => {
            console.log(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error.message);
        });
}


    return(
        <View style={styles.container}>
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
            {error !=="" && <Text>{error.error.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
                <Text style={styles.textButton}>
                SignIn
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
        backgroundColor:"grey",
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

