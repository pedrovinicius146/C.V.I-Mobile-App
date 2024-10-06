import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./estilo";
import { useState } from "react";
import { Link } from "expo-router";
import { autenticarAluno } from './db';

export default function Index() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    await autenticarAluno(matricula, senha);
  };

  return (
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
              placeholder="Digite sua matricula"
              placeholderTextColor='#79a4b3'
              value={matricula}
              onChangeText={setMatricula}
            />

            <TextInput
              style={estilos.input_text}
              placeholder="Digite sua senha"
              placeholderTextColor='#79a4b3'
              value={senha}
              onChangeText={setSenha}
              secureTextEntry // Para ocultar a senha digitada
            />

            <View style={estilos.container_senha}>
              <Text style={estilos.fonte_senha}>
                Esqueceu sua senha? <Text style={estilos.link_senha}>Clique Aqui</Text>
              </Text>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={handleLogin}>
              <Text style={estilos.texto_botao}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Link href='/cadastro'>ir para cadastro</Link>
          <Link style={{color:'blue'}} href='/menu'>ir para o menu</Link>
        </View>

        <View><Text>Rodapé</Text></View>
      </View>
    </View>
  );
}
