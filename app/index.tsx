import { Image, StatusBar, Text,TextInput, TouchableOpacity, View, Linking, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import estilos from "./estilo";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { autenticarUsuario } from './db';

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const rota = useRouter();

  const handleLogin = async () => {
    await autenticarUsuario(email, senha, rota);
  };
  
  function IrParaCadastro() {
    rota.push('/cadastro');
  
  }
  const abrirwpp = () => {
    Linking.openURL('whatsapp://send?phone=+558199282745').catch(err =>
      console.error('Erro ao abrir o WhatsApp:', err)
    );
  };
  const abririnsta = () => {
    Linking.openURL('instagram://user?username=cvijanga').catch(err =>
      console.error('Erro ao abrir o Instagram:', err)
    );
  };
  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // ajuste do offset para Android
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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
                  secureTextEntry
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

                <TouchableOpacity
                  style={estilos.botaoCadastro}
                  onPress={IrParaCadastro}
                >
                  <Text style={estilos.textoBotaoCadastro}>Ir para Cadastro</Text>

              
                </TouchableOpacity>
              </View>
            </View>

            <View style={estilos.container_rodape}>
            <TouchableOpacity onPress={abrirwpp}>
            <Image
            style={estilos.imagemIcone}
           source={require('../assets/images/wpplogo.png')}
            />
             </TouchableOpacity>
            <TouchableOpacity onPress={abririnsta}>
              <Image
            style={estilos.imagemIcone}
            source={require('../assets/images/instalogo.png')}
         />
             </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
