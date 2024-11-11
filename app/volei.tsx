import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, View, TouchableOpacity, ScrollView } from "react-native";
import estilos from "./estilo";
import { ref, onValue } from "firebase/database";
import { database } from "./db";

type Evento = {
  id: string;
  titulo: string;
  descricao: string;
  timestamp: number;
};

export default function Volei() {
  const [eventosArray, setEventosArray] = useState<Evento[]>([]);

  useEffect(() => {
    const eventosRef = ref(database, "Atividades/volei/Eventos");

    const unsubscribe = onValue(eventosRef, (snapshot) => {
      if (snapshot.exists()) {
        const eventos: Evento[] = [];
        snapshot.forEach((childSnapshot) => {
          const eventoData = childSnapshot.val();
          eventos.push({
            id: childSnapshot.key || "",
            titulo: eventoData.titulo || "",
            descricao: eventoData.descricao || "",
            timestamp: eventoData.timestamp || 0
          });
        });

        // Ordena os eventos pelo timestamp (mais recentes primeiro) e limita a 4 eventos
        const eventosOrdenados = eventos
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 4);

        setEventosArray(eventosOrdenados);
      } else {
        console.log("Nenhum evento encontrado.");
      }
    });

    return () => unsubscribe();
  }, []);

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
                  source={require("../assets/images/voleilogo.png")}
                />
                <Text style={estilos.professor}>Prof Fulano</Text>
              </View>

              <View style={estilos.containerEvento}>
                <Text style={estilos.tituloEvento}>Próximo evento</Text>
                {eventosArray.length > 0 ? (
                  <View style={estilos.caixaEvento}>
                    <Text style={estilos.textoEvento}>
                      {eventosArray[0].titulo} - {eventosArray[0].descricao}
                    </Text>
                  </View>
                ) : (
                  <Text style={estilos.textoEvento}>Nenhum evento disponível</Text>
                )}
              </View>
            </View>

            <View style={estilos.container_Calendario}>
              <Text style={estilos.calendarioTitulo}>Eventos</Text>
              <View style={estilos.calendarioGrid}>
                {eventosArray.map((evento) => (
                  <View key={evento.id} style={estilos.horarioContainer}>
                    <Text style={estilos.horarioTexto}>{evento.titulo}</Text>
                    <Text style={estilos.acaoHorario}>{evento.descricao}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
