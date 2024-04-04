/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './style';


const Start = ({navigation}:{ navigation : NavigationProp<any> }) => {
  return (
    <View style={styles.containers}>
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
