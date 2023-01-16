import { View, TouchableOpacity, Text, TextInput, StyleSheet, Icon } from 'react-native'
import React, { useState } from 'react'
import Icons from './ImportIcon'
export default function Inputs({ name, value, onchange, icons, type, isPassword, isShowPass, onPassword }) {

  const [focused, setfocused] = useState(false)
  const [icon, seticon] = useState(true)
  const onFocusChange = () => {
    setfocused({ focused: true });
  };
  const [hidepass, sethidepass] = useState({ isSecureTextEntry: true, })
  const hideshow = () => {
    sethidepass({
      isSecureTextEntry: !hidepass.isSecureTextEntry,
    })
  }
  return (
    <View>
      <View style={[styles.container, { borderColor: focused ? '#0779ef' : '#eee' }]}>
        <Icons type={type} name={icons} size={20} color={focused ? "#0779e4" : "grey"} />
        <TextInput secureTextEntry={hidepass.isSecureTextEntry ? true : false} placeholder={name}
          onFocus={onFocusChange}
          style={[styles.inputan,]}
          value={value}
          onChangeText={onchange}
        />
        {isPassword &&
          <TouchableOpacity onPress={() => hideshow()} style={{
            position: 'absolute',
            right: 20,
          }}>
            <Icons type={'FontAwesome'}
              color={focused ? "#0779e4" : "grey"}
              name={hidepass.isSecureTextEntry ? 'eye-slash' : 'eye'}

              size={25}
            />
          </TouchableOpacity>
        }

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  inputan: {
    width: 280,
    height: 50,
    paddingLeft: 10
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 200,
    borderWidth: 3.5,
    width: 325,
    height: 50,
    borderColor: "#eee",
    marginVertical: 10,
    paddingLeft: 15,
  }
})