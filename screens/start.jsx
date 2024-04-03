/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image source={{ uri: 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1711975324/qdrdurz7y94u8elszftl.png' }} style={styles.img} />
    <View style={{alignItems :'center', justifyContent :'center'}}>
      <Text style={styles.text}>Coffee so good,</Text>
      <Text style={styles.texta}>your taste buds </Text>
      <Text style={styles.texta}>will love it.</Text>
      <Text style={{color : 'grey'}} >The best grain, the finest roast, the powerful flavor.</Text>
      <View style={styles.tab}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home');}} style={styles.btn}>
          {/* <Image source={{uri : 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1711976629/yqipc9obnrah9sulvbbz.jpg'}} style={styles.g}/> */}
          <Text style={styles.font} >Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '100%',
  },
  img: {
    width: '100%',
    height: '70%',
  },
  g: {
    width: 20,
    height: 20,
  },
  btn: {
    backgroundColor: '#fff',
    width: '70%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  tab: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: '#3498db',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '-15%',
  },
  texta: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

