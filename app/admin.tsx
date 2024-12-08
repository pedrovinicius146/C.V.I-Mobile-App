import React, { useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import estilos from './estilo';
import { ref, push, set } from "firebase/database";
import { database } from './db';
import { useRouter } from 'expo-router';

export default function AdminScreen() {
  const [atividade, setAtividade] = useState('');
  const [tituloAviso, setTituloAviso] = useState('');
  const [descricaoAviso, setDescricaoAviso] = useState('');
  const [horario, setHorario] = useState('');
  const [atividadeHorario, setAtividadeHorario] = useState('');
  const rota = useRouter();

  // Lista de atividades permitidas
  const atividadesPermitidas = ['ballet', 'basquete', 'judô', 'vôlei', 'futsal', 'natação'];

  // Funções para navegação
  function IrParaTabelasAlunos() {
    rota.push('/tabelaAlunos');
  }

  function IrParaTabelasProfessores() {
    rota.push('/tabelaProfessores');
  }

  function IrParaCadastroProfessor() {
    rota.push('/CadastroProf'); // Navega para a página de cadastro de professor
  }

  // Função para adicionar um novo aviso no Firebase
  const adicionarAviso = async () => {
    if (!atividadesPermitidas.includes(atividade.toLowerCase())) {
      Alert.alert('Erro', 'Atividade inválida. Escolha uma atividade válida.');
      return;
    }

    if (atividade && tituloAviso && descricaoAviso) {
      const avisoRef = ref(database, `Atividades/${atividade}/Avisos`);
      const novoAvisoRef = push(avisoRef);

      await set(novoAvisoRef, {
        titulo: tituloAviso,
        descricao: descricaoAviso,
        timestamp: Date.now() // Adiciona o timestamp para ordenação
      });

      Alert.alert('Sucesso', 'Aviso adicionado com sucesso!');
      setAtividade('');
      setTituloAviso('');
      setDescricaoAviso('');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos para adicionar o aviso.');
    }
  };

  // Função para adicionar horário no Firebase
  const adicionarHorario = async () => {
    if (!atividadesPermitidas.includes(atividadeHorario.toLowerCase())) {
      Alert.alert(
        'Erro',
        `Atividade inválida. Escolha entre: ${atividadesPermitidas.join(', ')}.`
      );
      return;
    }

    if (atividadeHorario && horario) {
      try {
        const horarioRef = ref(database, `Horarios/${atividadeHorario.toLowerCase()}`);
        const novoHorarioRef = push(horarioRef);

        await set(novoHorarioRef, {
          horario: horario,
          timestamp: Date.now() // Adiciona o timestamp para ordenação
        });

        Alert.alert('Sucesso', `Horário para "${atividadeHorario}" adicionado com sucesso!`);
        setAtividadeHorario('');
        setHorario('');
      } catch (error) {
        Alert.alert('Erro', 'Houve um problema ao adicionar o horário. Tente novamente.');
        console.error('Erro ao adicionar horário: ', error);
      }
    } else {
      Alert.alert('Erro', 'Preencha todos os campos para adicionar o horário.');
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

      <ScrollView>
        <View style={estilos.bottom}>
          <View style={estilos.container_main__login}>
            <View style={estilos.container_login}>
              <Text style={estilos.texto_adm}>Administração</Text>

              <View style={estilos.containerOpcoes}>
                <View style={[estilos.linhaOpcoes, estilos.cabecalho_Adm]}>
                  <Text style={estilos.headerCell}>Gerenciamento</Text>
                </View>

                <View style={estilos.linhaOpcoes}>
                  <Text style={estilos.colunaTitulo}>Alunos</Text>
                  <View style={estilos.colunaAcoes}>
                    <TouchableOpacity style={estilos.botaoMenu} onPress={IrParaTabelasAlunos}>
                      <Text style={estilos.botoesmenu}>Ver Todos</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={estilos.linhaOpcoes}>
                  <Text style={estilos.colunaTitulo}>Professores</Text>
                  <View style={estilos.colunaAcoes}>
                    <TouchableOpacity style={estilos.botaoMenu} onPress={IrParaTabelasProfessores}>
                      <Text style={estilos.botoesmenu}>Ver Todos</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Formulário para adicionar aviso */}
              <View style={estilos.containerAvisos}>
                <Text style={estilos.tituloAvisos}>Adicionar Aviso </Text>

                <TextInput
                  style={estilos.input_text}
                  placeholder="Esporte (ex: futsal, ballet)"
                  value={atividade}
                  onChangeText={setAtividade}
                />

                <TextInput
                  style={estilos.input_text}
                  placeholder="Título do Aviso"
                  value={tituloAviso}
                  onChangeText={setTituloAviso}
                />

                <TextInput
                  style={[estilos.input_text, { height: 100, textAlignVertical: 'top' }]}
                  placeholder="Descrição do Aviso"
                  value={descricaoAviso}
                  onChangeText={setDescricaoAviso}
                  multiline
                />

                <TouchableOpacity style={estilos.botao} onPress={adicionarAviso}>
                  <Text style={estilos.texto_botao}>Adicionar Aviso</Text>
                </TouchableOpacity>
              </View>

              {/* Formulário para adicionar horário */}
              <View style={estilos.containerAvisos}>
                <Text style={estilos.tituloAvisos}>Adicionar Horário</Text>

                <TextInput
                  style={estilos.input_text}
                  placeholder="Atividade (ex: ballet, futsal)"
                  value={atividadeHorario}
                  onChangeText={setAtividadeHorario}
                />

                <TextInput
                  style={estilos.input_text}
                  placeholder="Horário (ex: 10:35 - segunda e terça)"
                  value={horario}
                  onChangeText={setHorario}
                />

                <TouchableOpacity style={estilos.botao} onPress={adicionarHorario}>
                  <Text style={estilos.texto_botao}>Adicionar Horário</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={estilos.botaoCadastroProf} onPress={IrParaCadastroProfessor}>
                <Text style={estilos.textoBotaoCadastroProf}>Cadastrar Professor</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
