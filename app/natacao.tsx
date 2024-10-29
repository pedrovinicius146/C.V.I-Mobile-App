import { Image, StatusBar, Text, View, TouchableOpacity,ScrollView } from "react-native";
import estilos from "./estilo";

export default function Natacao() {
  return (
    <ScrollView style={estilos.scrollCalendario}>
    <View style={estilos.body}>
      <StatusBar barStyle="light-content" backgroundColor="#075070" />
      <TouchableOpacity style={estilos.iconContainer}></TouchableOpacity>

     
      <View style={estilos.container_img}>
        <Image
          style={estilos.img}
          source={require("../assets/images/cvi1.png")}
        />
      </View>
      
      <View style={estilos.bottom}>
        <View style={estilos.container_main__login}>
         
          <View style={estilos.secaoSuperior}>
           
            <View style={estilos.containermenu2}>
              <Image
                style={estilos.imagemIconemenu2}
                source={require("../assets/images/natacaologo.png")}
              />
              <Text style={estilos.professor}>Prof Fulano</Text>
            </View>

            
            <View style={estilos.containerEvento}>
              <Text style={estilos.tituloEvento}>Próximo evento</Text>
              <View style={estilos.caixaEvento}>
                <Text style={estilos.textoEvento}>[Detalhes do evento]</Text>
              </View>
            </View>
          </View>

         
          <View style={estilos.container_Calendario}>
            <Text style={estilos.calendarioTitulo}>Horários</Text>
            <View style={estilos.calendarioGrid}>
              
              <View style={estilos.horarioContainer}>
                <Text style={estilos.horarioTexto}>De tal hora a tal hora</Text>
                <Text style={estilos.acaoHorario}>O que vai ser praticado</Text>
              </View>
              <View style={estilos.horarioContainer}>
                <Text style={estilos.horarioTexto}>De tal hora a tal hora</Text>
                <Text style={estilos.acaoHorario}>O que vai ser praticado</Text>
              </View>
              <View style={estilos.horarioContainer}>
                <Text style={estilos.horarioTexto}>De tal hora a tal hora</Text>
                <Text style={estilos.acaoHorario}>O que vai ser praticado</Text>
              </View>
              <View style={estilos.horarioContainer}>
                <Text style={estilos.horarioTexto}>De tal hora a tal hora</Text>
                <Text style={estilos.acaoHorario}>O que vai ser praticado</Text>
              </View>
              <View style={estilos.horarioContainer}>
                <Text style={estilos.horarioTexto}>De tal hora a tal hora</Text>
                <Text style={estilos.acaoHorario}>O que vai ser praticado</Text>
              </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
  );
}
