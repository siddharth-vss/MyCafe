/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './style';
// import { NavigationProp } from '@react-navigation/native';
// { navigation }: { navigation: NavigationProp<any> }
const Cart = () => {
    return (
        <View>
            <View>
                <Text style={[styles.title, { fontSize: 20 }]} >Delivery Address</Text>
                <Text style={[styles.title, { fontSize: 15 }]} >J1. kpg Sutoyo</Text>
                <Text style={styles.dec} >Kpg. Sutoyo No. 620,Bilzen , Tanjungbalai</Text>
            </View>
            <View style={styles.flex} >
                <TouchableOpacity>
                    <Text>fsd</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>fsd</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: 315, borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View style={[{ marginVertical: 20 }, styles.flex]} >
                <Image style={{ height: 75, width: 75, borderRadius: 17 }} source={{ uri: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D' }} />
                <View>
                    <Text style={[styles.title, { fontSize: 18 }]} >Cappucino</Text>
                    <Text style={[styles.dec, { fontSize: 13 }]} >with Chocolate</Text>
                </View>
                <View style={styles.flex} >
                    <TouchableOpacity>
                        <Text>-</Text>
                    </TouchableOpacity>

                    <Text>1</Text>
                    <TouchableOpacity>
                        <Text>+</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: '100%', borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>1% Discount is Applied</Text>
                </TouchableOpacity>
                <Text>Payment Summary</Text>
                <View style={[{ marginVertical: 5 }, styles.flex]} >
                    <Text>Price            </Text>
                    <Text>$4.5</Text>
                </View>
                <View style={[{ marginVertical: 5 }, styles.flex]} >
                    <Text>Delivery Fee </Text>
                    {/* discount comp will be add */}
                    <Text>$1.0</Text>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 1, width: 315, borderColor: '#989898', borderWidth: 0.5, borderStyle: 'solid' }} ></View>
            </View>
            <View style={[{ marginVertical: 5 }, styles.flex]} >
                <Text>Total Payment</Text>
                <Text>$5.5</Text>
            </View>
            <View style={[{ marginTop: 20, bottom: 0, position: 'relative', backgroundColor: '#f9f9f9', borderColor: '#989898', borderStyle: 'solid', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderWidth: 1 }, styles.flex]}>
                <TouchableOpacity style={[styles.cartbtn, { width: '90%', marginVertical: 20 }]} >
                    <Text style={[styles.btnt, { color: '#fff', fontSize: 20, fontWeight: 'bold' }]} >Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
