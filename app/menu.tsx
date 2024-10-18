import { Image, StatusBar, Text, View, TouchableOpacity } from "react-native";
import estilos from "./estilo"; 
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Menu() {
  return (
    <View style={estilos.body}>
      <StatusBar barStyle="light-content" backgroundColor="#075070" />
      <TouchableOpacity style={estilos.iconContainer}>
            <Icon name="bars" size={30} color="#fff" />
          </TouchableOpacity>
      <View style={estilos.top}>
        <View style={estilos.container_img}>
          <Image
            style={estilos.img}
            source={require("../assets/images/Cvi.png")}
          />
        </View>
      </View>

      <View style={estilos.bottom}>
        <View style={estilos.container_main__login}>

          <View style={estilos.container_menu_opcoes}>
            <View style={estilos.imageContainer}>
              <TouchableOpacity>
                <Image
                  style={estilos.imagemenu}
                  source={require("../assets/images/futsallogo.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity>
                <Image
                  style={estilos.imagemenu}
                  source={require("../assets/images/balletlogo.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity>
                <Image
                  style={estilos.imagemenu}
                  source={require("../assets/images/voleilogo.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity>
                <Image
                  style={estilos.imagemenu}
                  source={require("../assets/images/basquetelogo.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity>
                <Image
                  style={estilos.imagemenu}
                  source={require("../assets/images/natacaologo.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity>
                <Image
                  style={estilos.imagemenu}
                  source={require("../assets/images/judologo.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View>
          <Text>Rodapé</Text>
        </View>
      </View>
    </View>
  );
}
