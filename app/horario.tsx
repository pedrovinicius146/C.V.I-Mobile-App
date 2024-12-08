import React, { useState, useEffect } from "react";
import { Image, StatusBar, Text, View, Alert } from "react-native";
import estilos from "./estilo";
import { database } from "./db"; // Importa a instância do Firebase Database
import { ref, get } from "firebase/database"; // Função para obter dados do Firebase

interface HorarioData {
  horario: string;
  timestamp: number;
}

export default function Horario() {
  const [horarios, setHorarios] = useState<any>({});

  // Função para buscar os horários mais recentes de cada atividade
  const fetchHorarios = async () => {
    try {
      const horariosRef = ref(database, "Horarios");

      const snapshot = await get(horariosRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const horariosAtualizados: any = {};

        // Para cada atividade (ballet, basquete, etc.), pegar o horário mais recente
        for (const atividade of ['ballet', 'basquete', 'judô', 'vôlei', 'futsal', 'natação']) {
          if (data[atividade]) {
            const horariosAtividade = data[atividade] as Record<string, HorarioData>; // Afirmamos que é um objeto com chaves de string e valores de HorarioData

            // Ordena por timestamp para pegar o mais recente
            const horariosOrdenados = Object.entries(horariosAtividade)
              .sort((a, b) => (b[1] as HorarioData).timestamp - (a[1] as HorarioData).timestamp); // Garantimos que estamos acessando 'timestamp'

            // Pega o horário mais recente
            if (horariosOrdenados.length > 0) {
              horariosAtualizados[atividade] = (horariosOrdenados[0][1] as HorarioData).horario;
            }
          }
        }

        setHorarios(horariosAtualizados);
      } else {
        console.log("Não há dados de horários no Firebase.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os horários.");
      console.error("Erro ao buscar dados do Firebase: ", error);
    }
  };

  // Carrega os horários ao montar o componente
  useEffect(() => {
    fetchHorarios();
  }, []);

  return (
    <View style={estilos.body}>
      <StatusBar barStyle="light-content" backgroundColor="#075070" />

      <View style={estilos.top}>
        <View style={estilos.container_img}>
          <Image
            style={estilos.img}
            source={require("../assets/images/Cvi.png")}
          />
        </View>
      </View>

      {/* Título centralizado */}
      <View style={estilos.container_Calendario}>
        <Text style={estilos.tituloAvisos}>Horários</Text>

        {/* Texto das atividades */}
        <View style={estilos.container_Calendario}>
          <Text style={estilos.horarioTexto}>Ballet</Text>
          <View style={estilos.caixaAvisos}>
            <Text style={estilos.textoAvisos}>{horarios['ballet'] || "Aqui vai o horário para Ballet"}</Text>
          </View>
        </View>

        <View style={estilos.container_Calendario}>
          <Text style={estilos.horarioTexto}>Basquete</Text>
          <View style={estilos.caixaAvisos}>
            <Text style={estilos.textoAvisos}>{horarios['basquete'] || "Aqui vai o horário para Basquete"}</Text>
          </View>
        </View>

        <View style={estilos.container_Calendario}>
          <Text style={estilos.horarioTexto}>Judô</Text>
          <View style={estilos.caixaAvisos}>
            <Text style={estilos.textoAvisos}>{horarios['judô'] || "Aqui vai o horário para Judô"}</Text>
          </View>
        </View>

        <View style={estilos.container_Calendario}>
          <Text style={estilos.horarioTexto}>Futsal</Text>
          <View style={estilos.caixaAvisos}>
            <Text style={estilos.textoAvisos}>{horarios['futsal'] || "Aqui vai o horário para Futsal"}</Text>
          </View>
        </View>

        <View style={estilos.container_Calendario}>
          <Text style={estilos.horarioTexto}>Natação</Text>
          <View style={estilos.caixaAvisos}>
            <Text style={estilos.textoAvisos}>{horarios['natação'] || "Aqui vai o horário para Natação"}</Text>
          </View>
        </View>

        <View style={estilos.container_Calendario}>
          <Text style={estilos.horarioTexto}>Vôlei</Text>
          <View style={estilos.caixaAvisos}>
            <Text style={estilos.textoAvisos}>{horarios['vôlei'] || "Aqui vai o horário para Vôlei"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
