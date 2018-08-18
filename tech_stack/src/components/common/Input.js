import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value, placeHolder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        style={inputStyle}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
