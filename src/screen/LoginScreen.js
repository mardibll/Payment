import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Inputs from '../component/inputs'
import Submit from '../component/Submit'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function LoginScreen({ navigation }) {
    const [login, setlogin] = useState({
        name: '',
        password: ''
    })
    return (
        <View style={{ backgroundColor: "white", flex: 1, alignItems: 'center' }}>
            <Image
                source={require("../../assets/login.png")}
                resizeMode="center"
                style={{ height: '35%', width: '90%' }}
            />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>Welcome back</Text>
            <Text style={{ color: 'black', fontSize: 13 }}>Log in to your existant account</Text>
            <Inputs name={'Name'} value={login.name} onchange={val => setlogin({ ...login, name: val })} type={'Fontisto'} icons={'person'} />
            <Inputs isPassword name={'Password'} value={login.password} onchange={val => setlogin({ ...login, password: val })} type={'FontAwesome5'} icons={'lock'} />
            <Submit text={'LOG IN'} color={'#0251ce'} onPress={() => navigation.navigate('TabnavigationsScreen')} />
            <View style={{ flexDirection: "row" }}>
                <Text >Don't Have an account</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={{ color: "blue" }}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}