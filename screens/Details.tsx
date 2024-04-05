/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { NavigationProp } from '@react-navigation/native';

const Details = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <View>
            <View style={{ height: hp(70) }}>
                <View style={styles.imgcon} >
                    <Image style={[styles.imgdetails, { height: hp(28), width: wp(80) }]} source={{ uri: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D' }} />
                </View>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }} >
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={[styles.title, { fontSize: 20 }]} >Title</Text>
                        <Text style={[styles.dec, { fontSize: 10 }]} >Description</Text>
                        <Text style={[styles.title, { fontSize: 10 }]} > ⭐4.8(230)</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={[styles.title, { fontSize: 20 }]} >Title</Text>
                        <Text style={[styles.dec, { fontSize: 10 }]} >Description</Text>
                        <Text style={[styles.title, { fontSize: 10 }]} > ⭐4.8(230)</Text>
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
                    <View style={styles.flex} >
                        <TouchableOpacity style={styles.btnd} ><Text style={styles.btnt} >S</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnd} ><Text style={styles.btnt} >M</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnd} ><Text style={styles.btnt} >L</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ height: hp(30),marginTop : hp(8) }}>
                <View style={[{ height : hp(13) ,marginTop: hp(1), flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#f9f9f9', borderColor: '#989898', borderStyle: 'solid', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderWidth: 1 }]}>
                    <View>
                        <Text style={[styles.title, styles.dec, { fontSize: 20, marginTop: hp(0) }]} >Price</Text>
                        <Text style={[styles.title, { fontSize: 30, color: '#C67C4E', marginTop: -10 }]} >$45</Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Cart'); }} style={[styles.cartbtn, { marginTop: hp(2) }]} >
                        <Text style={[styles.btnt, { color: '#fff', fontSize: 20, fontWeight: 'bold' }]} >Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Details;


