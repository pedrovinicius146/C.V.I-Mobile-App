import { Image, StatusBar, Text, TextInput, TouchableOpacity, View,ScrollView } from "react-native";
import estilos from "./estilo";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { autenticarAluno } from './db'; 
import { Linking } from 'react-native';

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const rota = useRouter(); // Para navegação

  const handleLogin = async () => {
    await autenticarAluno(email, senha, rota);
  };

  return (
    <ScrollView>
      <View style={estilos.body}>
        <StatusBar barStyle="light-content" backgroundColor="#075070" />
        <View style={estilos.top}>
          <View style={estilos.container_img}>
            <Image style={estilos.img} source={require('../assets/images/Cvi.png')} />
          </View>
        </View>
        <View style={estilos.bottom}>
          <View style={estilos.container_main__login}>
            <View style={estilos.container_login}>
              <Text style={estilos.texto_login}>Login</Text>
              <TextInput
                style={estilos.input_text}
                placeholder="Digite seu Email"
                placeholderTextColor='#79a4b3'
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={estilos.input_text}
                placeholder="Digite sua Senha"
                placeholderTextColor='#79a4b3'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry // Para ocultar a senha digitada
              />
              <View style={estilos.container_senha}>
                <Text style={estilos.fonte_senha}>
                  Esqueceu sua senha?{" "}
                  <Text
                    style={estilos.link_senha}
                    onPress={() => rota.push("/redefinirsenha")}
                  >
                    Clique Aqui
                  </Text>
                </Text>
              </View>
              <TouchableOpacity style={estilos.botao} onPress={handleLogin}>
                <Text style={estilos.texto_botao}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <Link href='/cadastro'>Ir para cadastro</Link>
            <Link href='/admin'>Ir para o admin</Link>
            <Link href='/menu'>Ir para o menu</Link>
          </View>
          <View style={estilos.container_rodape}>
          <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?phone=+558199282745')} style={estilos.iconContainer} >
              <Image style={estilos.imagemIconeInstagram} source={require('../assets/images/wpplogo.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('instagram://user?username=cvijanga')} style={estilos.iconContainer} >
              <Image style={estilos.imagemIconeInstagram} source={require('../assets/images/instalogo.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}