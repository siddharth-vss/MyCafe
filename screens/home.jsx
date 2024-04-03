/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
const HomeSceen = ({navigation}) => {
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
              Bilzen,Tanjungbalai &#11167;
            </Text>
          </View>
          <Image style={styles.prof} source={{ uri: 'https://images.unsplash.com/photo-1712068944613-1ff36db16612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
        </View>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#989898'}
          placeholder="Search coffee"
          keyboardType="name-phone-pad" />
      </LinearGradient>
      <View style={styles.bottom} >
        <View style={{ alignItems: 'center'}}>
          <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1522096675830-2d2ce3a8c389?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlLGNvZmZlZXx8fHx8fDE3MTIxMzk5MDc&ixlib=rb-4.0.3&q=80&w=720' }} />
        </View>
        <ScrollView horizontal={true} >
          <TouchableOpacity onPress={()=>{navigation.navigate('Start');}} style={styles.hbtn} >
            <Text style={[styles.bold,styles.btntxt]}>Coffee</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView style={styles.scroll} >
          <FlatList
           numColumns={2}
           data={DATA}
           renderItem={({item,index})=>
          ( DATA.length % 2 ===  0) ? (  <View style={[styles.card,((DATA.length - 1) === index ) ? {height : 240} : {}]}>
            <Image style={styles.cardimg} source={{uri :'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D'}} />
            <Text style={styles.cardtitle} >{item.title}</Text>
            <Text style={styles.carddec} > dsfdfs</Text>
            <View style={{justifyContent :'space-around', flexDirection:'row' }} >
              <Text style={styles.cardprice} >$10</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('Details');}} style={[styles.hbtn,{marginTop : '-1%',height : 40 ,width : 50,marginHorizontal : -5 } ]} >
                <Text style={[styles.bold,styles.btntxt,{fontSize : 30,marginTop : -12,marginHorizontal : -5}]} >+</Text>
              </TouchableOpacity>
            </View>
          </View>) : (  <View style={[styles.card,((DATA.length - 1) === index ) ? {height : 240} : {}]}>
              <Image style={styles.cardimg} source={{uri :'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF0dGUlMjBhcnR8ZW58MHx8MHx8fDA%3D'}} />
              <Text style={styles.cardtitle} >{item.title}</Text>
              <Text style={styles.carddec} > dsfdfs</Text>
              <View style={{justifyContent :'space-around', flexDirection:'row' }} >
                <Text style={styles.cardprice} >$10</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Details');}} style={[styles.hbtn,{marginTop : '-1%',height : 40 ,width : 50,marginHorizontal : -5 } ]} >
                  <Text style={[styles.bold,styles.btntxt,{fontSize : 30,marginTop : -12,marginHorizontal : -5}]} >+</Text>
                </TouchableOpacity>
              </View>
            </View>)
           }
          />
        </ScrollView>
      </View>
    </View>
  );
};
const Home = ({navigation}) =>{
  return (
    <Tab.Navigator
    initialRouteName="Home"

    screenOptions={{ tabBarShowLabel:false}}
    >
      <Tab.Screen  name="Home" options={{headerShown :false }} component={HomeSceen} />
    </Tab.Navigator>
  );
}

export default Home;

const styles = StyleSheet.create({
  cardprice:{
    fontSize : 20,
    fontWeight : 'bold',
    color : '#000000',
    // textAlign : 'center',
  },
  cardimg:{
    height: 110,
    width: '100% - 10' ,
    borderRadius : 25,
    margin : 10,
  },
  carddec:{
    color : '#989898',
    fontSize : 12,
    textAlign : 'center',
    lineHeight : 20,
  },
  cardtitle:{
    fontSize : 20,
    fontWeight : 'bold',
    color : '#000000',
    textAlign : 'center',
  },
  scroll:{
    height : '86%',
    marginTop : 20 ,
    padding : '5%',
    paddingBottom : '10%',
  },
  card:{
    width : '40%',
    height : 220,
    marginLeft :'5%',
    marginRight:'5%',
    marginBottom :'10%',
    backgroundColor: '#ffffff',
    borderRadius : 25,
  },
  btntxt:{
    fontSize : 15,
    color : 'white',
  },
  hbtn: {
    marginVertical :10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#C67C4E',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    width: '100%',
    height: '33%',
    backgroundColor: '#000',
  },
  img: {
    height: 150,
    width: 300,
    borderRadius: 25,
    marginTop: '-20%',
  },
  bottom: {
    width: '100%',
    height: '70%',
  },
  txt: {
    color: '#fff',
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  center: {
    textAlign: 'center',
  },
  prof: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#313131',
    borderRadius: 10,
    color: '#989898',
    paddingLeft: 50,
    marginTop: 44,
    marginLeft: '8%',
    marginRight: '8%',
  },
});

