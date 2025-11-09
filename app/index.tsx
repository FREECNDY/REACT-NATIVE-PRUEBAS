
import { Link } from "expo-router";
import {
  Alert,
  Button, Image, StyleSheet,

  Text, View
} from "react-native";

const tu_puta_madre = require('../assets/images/ruth.png');


export default function Index() {
  return (
    <View style={style.General}>
      <Text style={style.Letras}> Hola papus,se como poner botones</Text>
      <Button title="POPO"  onPress={() => { Alert.alert('Se te esta saliendo el gas');
      }} >  
      </Button>
      <Link   href={"/HUH"}>HUH</Link>
      <Image source={tu_puta_madre}/>
      
      
    </View>
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
  }
  


})

