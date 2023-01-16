import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Inputs from '../component/inputs'
import Submit from '../component/Submit'
export default function SignUpScreen({ navigation }) {
    const [regist, setregist] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirm: ''
    })
    const [ShowPass, setShowPass] = useState(false)
    return (
        <View style={{ backgroundColor: "white", flex: 1, alignItems: 'center' }}>
            <Image
                source={require("../../assets/signup.png")}
                resizeMode="center"
                style={{ height: '25%', width: '100%' }}
            />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 27 }}>Let's Get Started</Text>
            <Text style={{ color: 'black', fontSize: 12 }}> Create an account to get all featur</Text>
            <Inputs name={'Full Name'} value={regist.name} onchange={val => setregist({ ...regist, name: val })} type={'Fontisto'} icons={'person'} />
            <Inputs name={'Email'} value={regist.email} onchange={val => setregist({ ...regist, email: val })} type={'MaterialCommunityIcons'} icons={'email'} />
            <Inputs name={'Phone'} value={regist.phone} onchange={val => setregist({ ...regist, phone: val })} type={'FontAwesome5'} icons={'phone-alt'} />
            <Inputs isPassword name={'Password'} value={regist.password} onchange={val => setregist({ ...regist, password: val })} type={'FontAwesome5'} icons={'lock'} />
            <Inputs isPassword name={'Confirmasi Password'} value={regist.confirm} onchange={val => setregist({ ...regist, confirm: val })} type={'FontAwesome5'} icons={'lock'} />
            <Submit text={'CREATE'} color={'#0251ce'} onPress={() => navigation.navigate('LoginScreen')} />
            <View style={{ flexDirection: "row" }}>
                <Text style={{}}>Aiready have an account</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[{ color: "blue" }]}>Login here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}