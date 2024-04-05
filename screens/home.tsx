/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable space-infix-ops */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import { FlatList, Image, ScrollView,  Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './cart';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: 'bd8acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: 'bf8acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3bc68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }];
const HomeSceen = ({ navigation } : {navigation : NavigationProp<any>}) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0.0, y: 0.0 }} end={{ x: -0.3, y: 1.0 }}
        // locations={[0, 0.5, 0.6]}
        colors={['#131313', '#313131']}
        style={styles.top}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: '6%' }}>
          <View>
            <Text style={styles.txt} >
              Location
            </Text>
            <Text style={[styles.txt, styles.bold]} >
              Bilzen,Tanjungbalai <TouchableOpacity><AntDesign name="down" color="white" size={15} /></TouchableOpacity>
            </Text>
          </View>
          <Image style={styles.prof} source={{ uri: 'https://images.unsplash.com/photo-1712068944613-1ff36db16612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </View>
        <View style={styles.flex}>
          <Ionicons style={{position:'absolute',left : wp(14) ,zIndex :2,top :55}} name="search"  size={28} color="#fff" />
        <TextInput
          style={[styles.input,{marginLeft : wp(0)}]}
          placeholderTextColor={'#989898'}
          placeholder="Search coffee"
          keyboardType="name-phone-pad" />
          </View>
      </LinearGradient>
      <View style={styles.bottom} >
        <View style={{ alignItems: 'center' }}>
          <Image style={[styles.imghome,{height : hp(15),width : wp(75) ,marginTop : hp(-8) }]} source={{ uri: 'https://images.unsplash.com/photo-1522096675830-2d2ce3a8c389?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlLGNvZmZlZXx8fHx8fDE3MTIxMzk5MDc&ixlib=rb-4.0.3&q=80&w=720' }} />
        </View>
        <ScrollView horizontal={true} >
          <TouchableOpacity onPress={() => { navigation.navigate('Start'); }} style={styles.hbtn} >
            <Text style={[styles.bold, styles.btntxt]}>Coffee</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView style={styles.scroll} >
          <FlatList
            numColumns={2}
            data={DATA}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{marginTop : 50}}></View>}
            renderItem={({ item }) =>
              <View style={[styles.card]}>
                <Image style={styles.cardimg} source={{ uri: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D' }} />
                <Text style={styles.cardtitle} >{item.title}</Text>
                <Text style={styles.carddec} > dsfdfs</Text>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }} >
                  <Text style={styles.cardprice} >$10</Text>
                  <TouchableOpacity onPress={() => { navigation.navigate('Details'); }} style={[styles.hbtn, { marginTop: '-1%', height: 40, width: 50, marginHorizontal: -5 }]} >
                    <Text style={[styles.bold, styles.btntxt, { fontSize: 30, marginTop: -12, marginHorizontal: -5 }]} >+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};
const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route})=>({
        tabBarIcon: ({ focused,  size }) => {
          let iconName;
          let colour;
          if (route.name === 'HomeScreen') {
            iconName = 'home';
            colour = focused? '#C67C4E' : 'grey';
          } else if (route.name === 'Cart') {
            iconName =  'cart';
            colour = focused? '#C67C4E'  : 'grey';
          // } else if (route.name === 'StartScreen') {
          //   iconName = focused? 'coffee' : 'coffee';
          //   colour = focused? 'home' : 'home';
          // } else if (route.name === 'ProfileScreen') {
          //   iconName = focused? 'user' : 'user';
          //   colour = focused? 'home' : 'home';
          }
          return <Ionicons name={iconName} size={size} color={colour} />;
        },tabBarHideOnKeyboard :true,
      })}
    >
      <Tab.Screen name="HomeScreen" options={{ headerShown: false ,tabBarShowLabel: false }} component={HomeSceen} />
      <Tab.Screen name="Cart" options={{tabBarShowLabel: false}} component={Cart} />
    </Tab.Navigator>
  );
};

export default Home;
