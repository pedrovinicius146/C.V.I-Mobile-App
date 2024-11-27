import { Image, StatusBar, Text, View, TouchableOpacity, Linking } from "react-native";
import { StyleSheet } from "react-native";
import estilos from "./estilo"; 
import { Link, useRouter } from "expo-router";

 
export default function Menu() {
  const rota = useRouter();

  return (
    <View style={estilos.body}>
      <StatusBar barStyle="light-content" backgroundColor="#075070" />

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
              <TouchableOpacity onPress={() => rota.push('/futsal')}>
                <View style={estilos.iconview}>
                  <Image
                    style={estilos.imagemenu}
                    source={require("../assets/images/futsallogo.png")}
                  />
                  <Text style={estilos.textoiconesmenu}>Futsal</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity onPress={() => rota.push('/bale')}>
                <View style={estilos.iconview}>
                  <Image
                    style={estilos.imagemenu}
                    source={require("../assets/images/balletlogo.png")}
                  />
                  <Text style={estilos.textoiconesmenu}>Ballet</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity onPress={() => rota.push('/volei')}>
                <View style={estilos.iconview}>
                  <Image
                    style={estilos.imagemenu}
                    source={require("../assets/images/voleilogo.png")}
                  />
                  <Text style={estilos.textoiconesmenu}>Vôlei</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity onPress={() => rota.push('/basquete')}>
                <View style={estilos.iconview}>
                  <Image
                    style={estilos.imagemenu}
                    source={require("../assets/images/basquetelogo.png")}
                  />
                  <Text style={estilos.textoiconesmenu}>Basquete</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity onPress={() => rota.push('/natacao')}>
                <View style={estilos.iconview}>
                  <Image
                    style={estilos.imagemenu}
                    source={require("../assets/images/natacaologo.png")}
                  />
                  <Text style={estilos.textoiconesmenu}>Natação</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={estilos.imageContainer}>
              <TouchableOpacity onPress={() => rota.push('/judo')}>
                <View style={estilos.iconview}>
                  <Image
                    style={estilos.imagemenu}
                    source={require("../assets/images/judologo.png")}
                  />
                  <Text style={estilos.textoiconesmenu}>Judô</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
