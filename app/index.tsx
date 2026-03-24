import { Link } from "expo-router";
import  React, {useState} from 'react';
import {
  Alert,
  Button, Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const tu_puta_madre = require('../assets/images/ruth.png');


const [ ModalVisible, setModalVisible] = useState(false);
export default function Index() {
  return (
    
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={style.General}>
       <TouchableOpacity activeOpacity={0.6} onPress={() =>{}}>
        <Image  source={tu_puta_madre} style={style.Imagen}/> 
       </TouchableOpacity>
        
       <Text style={style.ImagenTEXY}>Chimalliguita</Text>
      <Text style={style.Letras}> Hola pa,se como poner botones</Text>
      <Button title="POPO"  onPress={() => { Alert.alert('Se te esta saliendo el gas');
      }} >  
      </Button>           
      <Link   href={"/HUH"}>HUH</Link>          
    </View>
      </SafeAreaView>
    </SafeAreaProvider>

    
    
  );
}



const style= StyleSheet.create({
  General:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
  },
  Letras:{
    fontSize: 22,
  },
  Linkstlye:{
    fontSize:15,
    fontStyle:"italic",
    color:"blue",
  },
  Imagen:{
    resizeMode: "cover",
    width: 50,
    height: 50,
    top: -280,
    right: 70,
    
  },
  ImagenTEXY:{
   fontSize: 20,
    top: -310,
    right: -25,
    fontStyle:"italic",


  }
  


})




