import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./estilo";
import { useState } from "react";
import { CadastrarAluno } from "./db";
import { useRouter} from "expo-router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const rota=useRouter()

  const handleCadastro = async () => {
    await CadastrarAluno(nome, email, senha,rota);
    
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
            <Text style={estilos.texto_login}>Cadastro</Text>

            <TextInput
              style={estilos.input_text}
              placeholder="Digite o Nome"
              placeholderTextColor='#79a4b3'
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={estilos.input_text}
              placeholder="Digite o Email"
              placeholderTextColor='#79a4b3'
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={estilos.input_text}
              placeholder="Digite a Senha"
              placeholderTextColor='#79a4b3'
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <TouchableOpacity style={estilos.botao} onPress={handleCadastro}>
              <Text style={estilos.texto_botao}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}