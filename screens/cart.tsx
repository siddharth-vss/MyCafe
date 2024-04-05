/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import { styles } from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { NavigationProp } from '@react-navigation/native';
// { navigation }: { navigation: NavigationProp<any> }
const Cart = () => {
    return (
        <ScrollView>
            <View>
                <Text style={[styles.title, { fontSize: 20 }]} >Delivery Address</Text>
                <Text style={[styles.title, { fontSize: 15 }]} >J1. kpg Sutoyo</Text>
                <Text style={styles.dec} >Kpg. Sutoyo No. 620,Bilzen , Tanjungbalai</Text>
            </View>
            <View style={[styles.flex, { marginTop: hp(1.5), marginBottom: hp(2), justifyContent: 'flex-start', marginLeft: '5%' }]} >
                <TouchableOpacity style={[styles.btn, styles.flex, { justifyContent: 'center', width: 120 }]}>
                    <FontAwesome name="pencil-square-o" size={20} />
                    <Text>Edit Address</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: 315, borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View style={[{ marginVertical: hp(1) }, styles.flex]} >
                <Image style={{ height: hp(10), width: hp(10), borderRadius: 17 }} source={{ uri: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D' }} />
                <View>
                    <Text style={[styles.title, { fontSize: 18 }]} >Cappucino</Text>
                    <Text style={[styles.dec, { fontSize: 13 }]} >with Chocolate</Text>
                </View>
                <View style={[styles.flex]} >
                    <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 50, borderStyle: 'solid', borderColor: '#000', borderWidth: 1, width: wp(10), marginHorizontal: 6, alignItems: 'center' }} >
                        <Text>-</Text>
                    </TouchableOpacity>

                    <Text>1</Text>
                    <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 50, borderStyle: 'solid', borderColor: '#000', borderWidth: 1, width: wp(10), marginHorizontal: 6, alignItems: 'center' }} >
                        <Text>+</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: '100%', borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View>
                <Text style={[styles.title, { fontSize: 20 }]} >Payment Summary</Text>
                <View style={[{ marginVertical: 5 }, styles.flex]} >
                    <Text style={[styles.dec, { color: '#684652' }]} >Price            </Text>
                    <Text style={[styles.dec, { color: '#684652' }]} >$4.5</Text>
                </View>
                <View style={[{ marginVertical: 5 }, styles.flex]} >
                    <Text style={[styles.dec, { color: '#684652' }]} >Delivery Fee </Text>
                    {/* discount comp will be add */}
                    <Text style={[styles.dec, { color: '#684652' }]} >$1.0</Text>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: 315, borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View style={[{ marginVertical: hp(5) }, styles.flex]} >
                <Text style={[styles.dec, { color: '#684652' }]} >Total Payment</Text>
                <Text style={[styles.dec, { color: '#684652' }]} >$5.5</Text>
            </View>
            <View style={[{ marginTop: hp(3), bottom: 0, position: 'relative', backgroundColor: '#f9f9f9', borderColor: '#989898', borderStyle: 'solid', borderRadius: 25, borderWidth: 1 }, styles.flex]}>
                <TouchableOpacity style={[styles.cartbtn, { width: '90%', marginVertical: 20 }]} >
                    <Text style={[styles.btnt, { color: '#fff', fontSize: 20, fontWeight: 'bold' }]} >Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Cart;
