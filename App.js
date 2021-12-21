import React, { useState } from 'react';
import {Pressable, Keyboard, SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  return (
    
    <SafeAreaView style={styles.containerGeral}>
      
       <Text style={styles.h1}>QR code.D7</Text>
      <Pressable onPress={Keyboard.dismiss} style={styles.containerQr}>
        <QRCode
          value={qrValue ? qrValue : 'NA'}
          size={180}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
       
      </Pressable>
        <Text style={styles.text}>
          Insira qualquer valor:
        </Text>
      <View style={styles.container}>
       
        <TextInput
        
        placeholder="Ex. https://www.QRcode.D7.com"
          style={styles.textInput}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        />
        
        <View style={{margin:5}}>
          <TouchableOpacity  style={styles.buttonGerar} onPress={() => setQrValue(inputText)}><Text style={styles.textButton}>Gerar QR Code</Text></TouchableOpacity>
           <Text style={styles.textDev}>
          Desenvolvedor: Douglas Mateus Teixeira
        </Text>
        </View>
        </View>    
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  containerGeral: {
    flex: 1, 
    backgroundColor:"#e8eded",
  },
  h1: {
    color: "#03c6c3",
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom:10,
  },
  containerQr: {
    flex: 1,
    paddingTop: 80,
    paddingBottom:80,
    backgroundColor:"#f6f6f6",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: "#03c6c3",
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    
  },
  textInput: {
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:25,
        margin:12,
        marginTop: 0,
        paddingLeft:10,
  },
  buttonGerar: {
    borderRadius: 50,
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    backgroundColor:"#03c6c3",
    paddingTop: 14,
    paddingBottom:14,
    margin:15,
  },
  textButton: { 
    fontSize: 20,
    color: "#ffffff",
  },
  textDev: {
    color: "#b7b7b7",
    fontSize: 10,
    textAlign: 'center',
  }
});
