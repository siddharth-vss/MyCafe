/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // start page container
  containers: {  //bg
    backgroundColor: '#000000',
    height: '100%',
  },
  img: {  // image of coffee
    width: '100%',
    height: '70%',
  },
  text: { //white text 1st line
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
  tab: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  g: { // for G btn
    width: 20,
    height: 20,
  },
  font: {
    color: '#3498db',
    fontSize: 25,
    fontWeight: 'bold',
  },

  // home
  top: {  // grediant part , top part of page : part 1
    width: '100%',
    height: '33%',
    backgroundColor: '#000',
  },
  bottom: { // list part , bottom part of page : part 2
    width: '100%',
    height: '70%',
  },
  prof: { // profile picture
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  input: { // input of home page
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
  imghome: { // img of home page divaider
    height: 150,
    width: 300,
    borderRadius: 25,
    marginTop: '-20%',
  },
  //scroll btn
  btntxt: {
    fontSize: 15,
    color: 'white',
  },
  hbtn: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#C67C4E',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

//data
scroll: {
  height: '84%',
  marginTop: 20,
  padding: '5%',
  paddingBottom: '10%',
},
// card
card: {
  width: '40%',
  height: 220,
  marginLeft: '5%',
  marginRight: '5%',
  marginBottom: '10%',
  backgroundColor: '#ffffff',
  borderRadius: 25,
},
cardimg: {
  height: 110,
  width: '90%',
  borderRadius: 25,
  margin: '5%',
},
carddec: {
  color: '#989898',
  fontSize: 12,
  textAlign: 'center',
  lineHeight: 20,
},
cardtitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#000000',
  textAlign: 'center',
},
cardprice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
},

//Details

imgcon: {
  marginTop: 15,
  alignItems: 'center',
},
imgdetails: {
  height: 226,
  width: 315,
  borderRadius: 16,
  borderWidth: 1,
  margin: 10,
  borderColor: '#000000',
},
btnd: {
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
btnt: {
  fontSize: 20,
  color: '#000000',
},
cartbtn: {
  backgroundColor: '#C67C4E',
  width: '40%',
  height: 50,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
},

// all clases
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
  margin: 10,
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
flex: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
},
});
