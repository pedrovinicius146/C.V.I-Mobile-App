import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./estilo";
import { useState } from "react";
import { Link } from "expo-router";



export default function Index() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState('')

function exibir() {
  console.log(nome)
  console.log(senha)
}

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

            <TextInput style={estilos.input_text}
              placeholder="Digite sua matricula"
              placeholderTextColor='#79a4b3'
              value={nome}
              onChangeText={setNome}
              
            ></TextInput>

           

            <TextInput style={estilos.input_text}
              placeholder="Digite sua senha"
              placeholderTextColor='#79a4b3'
              value={senha}
              onChangeText={setSenha}
            ></TextInput>

            <View style={estilos.container_senha}><Text style={estilos.fonte_senha}>Esqueceu sua senha? <Text style={estilos.link_senha}>Clique Aqui</Text></Text></View>
            <TouchableOpacity style={estilos.botao}><Text style={estilos.texto_botao}>Entrar</Text></TouchableOpacity>

          </View>

          <Link href='/cadastro'>ir para cadastro</Link>

        </View>



<View><Text>Rodapé</Text></View>

      </View>
    </View>
  );
}