import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StatusBar } from "react-native";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import estilos from "./estilo"; 

export default function RedefinirSenha() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Redefinição de Senha", "Um e-mail foi enviado para redefinir sua senha.");
    } catch (error: any) {
      console.error("Erro ao enviar e-mail de redefinição:", error);
      Alert.alert("Erro", error.message || "Erro ao tentar redefinir a senha.");
    }
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
            <Text style={estilos.texto_login}>Redefinir Senha</Text>

            <TextInput
              style={estilos.input_text}
              placeholder="Digite seu Email"
              placeholderTextColor="#79a4b3"
              value={email}
              onChangeText={setEmail}
            />

            <TouchableOpacity style={estilos.botao} onPress={handleResetPassword}>
              <Text style={estilos.texto_botao}>Enviar e-mail de redefinição</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}