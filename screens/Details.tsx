/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {Image,StyleSheet,Text, View } from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View>
        <View style={styles.imgcon} >
            <Image style={styles.img} source={{uri : 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D'}}  />
        </View>
        <View>
            <Text style={styles.title} >Title</Text>
            <Text style={styles.dec} >Description</Text>
        </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
    imgcon:{
        marginTop : 15 ,
        alignItems: 'center',
    },
    img :{
        height : 226,
        width : 315,
        borderRadius : 16,
        borderWidth : 1,
        margin : 10,
        borderColor : '#000000',
    },
    title:{
        fontSize : 30,
        fontWeight : 'bold',
        color : '#000000',
        margin : 10,
    },
    dec:{
        fontSize : 15,
        color : '#989898',
        margin : 10,
    },
});
