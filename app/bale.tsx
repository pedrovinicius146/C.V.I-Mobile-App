import { Image, StatusBar, Text, View, TouchableOpacity } from "react-native";
import estilos from "./estilo"; 


export default function Bale() {
    return (
      <View style={estilos.body}>
        <StatusBar barStyle="light-content" backgroundColor="#075070" />
        <TouchableOpacity style={estilos.iconContainer}>
            </TouchableOpacity>
        <View style={estilos.top}>
          <View style={estilos.container_img}>
            <Image
              style={estilos.img}
              source={require("../assets/images/cvi1.png")}
            />
          </View>
          <View style={estilos.bottom}>
        <View style={estilos.container_main__login}>
          <View style={estilos.container_login}>
            <Text style={estilos.texto_login}></Text>
        </View>
        </View>
        </View>
        </View>
        </View>
        
  );
}