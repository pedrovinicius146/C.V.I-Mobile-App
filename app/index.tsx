import { Image, StatusBar, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView, Platform  } from "react-native";
import estilos from "./estilo";
import { useState } from "react";
import { Link } from "expo-router";
import { autenticarAluno } from './db';
import { useRouter } from "expo-router";

export default function Index() {
    const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const rota=useRouter();
  const handleLogin = async () => {
    await autenticarAluno(email, senha,rota);
    
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
                Esqueceu sua senha? <Text style={estilos.link_senha}>Clique Aqui</Text>
              </Text>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={handleLogin}>
              <Text style={estilos.texto_botao}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Link href='/cadastro'>ir para cadastro</Link>

          <Link href='/admin'>ir para o admin</Link>
          <Link style={{color:'blue'}} href='/menu'>ir para o menu</Link>
        </View>

        <View style={estilos.container_rodape}>
            <Link href='whatsapp://send?phone=+558199644185' style={estilos.iconContainer}>
              <Image style={estilos.imagemIconeWpp} source={require('../assets/images/wpplogo.png')} />
            </Link>
          

          <Link href='instagram://user?username=andrelbp_' style={estilos.iconContainer}>
            <Image style={estilos.imagemIconeInstagram} source={require('../assets/images/instalogo.png')} />
          </Link>
        </View>


        
      </View>
    </View>

);
}
