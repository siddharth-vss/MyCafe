/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Details = () => {
    return (
        <View>
            <View style={styles.imgcon} >
                <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D' }} />
            </View>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }} >
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.title} >Title</Text>
                    <Text style={styles.dec} >Description</Text>
                    <Text style={[styles.title, { fontSize: 15 }]} > ⭐4.8(230)</Text>
                </View>
                <View>
                    <Text style={styles.title} >icons</Text>
                    <Text style={styles.dec} >horizontaly</Text>
                    <Text style={[styles.title, { fontSize: 15 }]} > ⭐4.8(230)</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: 315, borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View>
                <Text style={[styles.title, { fontSize: 20 }]} >Description</Text>
                <Text style={styles.dec} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora architecto laboriosam soluta, quasi vitae harum fuga animi veniam illo quod?</Text>
            </View>
            <View>
                <Text style={[styles.title, { fontSize: 20 }]} >Size</Text>
                <View style={styles.size} >
                    <TouchableOpacity style={styles.btn} ><Text style={styles.btnt} >S</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} ><Text style={styles.btnt} >M</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} ><Text style={styles.btnt} >L</Text></TouchableOpacity>
                </View>
            </View>
            <View style={[{ marginTop : 20, flexDirection :'row',justifyContent :'space-around',backgroundColor :'#f9f9f9', borderColor :'#989898',borderStyle :'solid' ,borderTopLeftRadius : 25, borderTopRightRadius : 25, borderWidth : 1 }]}>
                <View>
                    <Text style={[styles.title,styles.dec, { fontSize: 20 ,marginTop : 5 }]} >Price</Text>
                    <Text style={[styles.title,{ fontSize: 30 ,color :'#C67C4E'}]} >$45</Text>
                </View>
                <TouchableOpacity  style={styles.cartbtn} >
                        <Text style={[styles.btnt,{color :'#fff',fontSize : 20 ,fontWeight: 'bold'}]} >Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    cartbtn:{
        backgroundColor :'#C67C4E',
        width:'40%',
        height : 50,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 30,
    },
    size: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnt: {
        fontSize: 20,
        color: '#000000',
    },
    btn: {
        width: 60,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#989898',
    },
    imgcon: {
        marginTop: 15,
        alignItems: 'center',
    },
    img: {
        height: 226,
        width: 315,
        borderRadius: 16,
        borderWidth: 1,
        margin: 10,
        borderColor: '#000000',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        margin: 10,
    },
    dec: {
        fontSize: 15,
        color: '#989898',
        marginTop: -10,
    },
});
