import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, View, TouchableOpacity, ScrollView } from "react-native";
import estilos from "./estilo";
import { ref, onValue } from "firebase/database";
import { database } from "./db";

type Aviso = {
  id: string;
  titulo: string;
  descricao: string;
  timestamp: number;
};

export default function Volei() {
  const [avisosArray, setAvisosArray] = useState<Aviso[]>([]);

  useEffect(() => {
    const avisosRef = ref(database, "Atividades/vôlei/Avisos");

    const unsubscribe = onValue(avisosRef, (snapshot) => {
      if (snapshot.exists()) {
        const avisos: Aviso[] = [];
        snapshot.forEach((childSnapshot) => {
          const avisoData = childSnapshot.val();
          avisos.push({
            id: childSnapshot.key || "",
            titulo: avisoData.titulo || "",
            descricao: avisoData.descricao || "",
            timestamp: avisoData.timestamp || 0
          });
        });

        // Ordena os eventos pelo timestamp (mais recentes primeiro) e limita a 4 eventos
        const avisosOrdenados = avisos
          .sort((a, b) => b.timestamp - a.timestamp)
          .slice(0, 4);

        setAvisosArray(avisosOrdenados);
      } else {
        console.log("Nenhum aviso encontrado.");
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

              <View style={estilos.containerAvisos}>
                <Text style={estilos.tituloAvisos}>Último Aviso</Text>
                {avisosArray.length > 0 ? (
                  <View style={estilos.caixaAvisos}>
                    <Text style={estilos.textoAvisos}>
                      {avisosArray[0].titulo} - {avisosArray[0].descricao}
                    </Text>
                  </View>
                ) : (
                  <Text style={estilos.textoAvisos}>Nenhum aviso disponível</Text>
                )}
              </View>
            </View>

            <View style={estilos.container_Calendario}>
              <Text style={estilos.calendarioTitulo}>Avisos</Text>
              <View style={estilos.calendarioGrid}>
                {avisosArray.map((aviso) => (
                  <View key={aviso.id} style={estilos.horarioContainer}>
                    <Text style={estilos.horarioTexto}>{aviso.titulo}</Text>
                    <Text style={estilos.acaoHorario}>{aviso.descricao}</Text>
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
