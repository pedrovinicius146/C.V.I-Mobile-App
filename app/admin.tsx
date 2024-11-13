import React, { useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import estilos from './estilo';
import { ref, push, set } from "firebase/database";
import { database } from './db';
import { useRouter } from 'expo-router';

export default function AdminScreen() {
  const [atividade, setAtividade] = useState('');
  const [tituloEvento, setTituloEvento] = useState('');
  const [descricaoEvento, setDescricaoEvento] = useState('');
  const rota = useRouter();

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

  // Função para navegação até a página de cadastro
 

  // Função para adicionar um novo evento no Firebase
  const adicionarEvento = async () => {
    if (atividade && tituloEvento && descricaoEvento) {
      const eventoRef = ref(database, `Atividades/${atividade}/Eventos`);
      const novoEventoRef = push(eventoRef);

      await set(novoEventoRef, {
        titulo: tituloEvento,
        descricao: descricaoEvento,
        timestamp: Date.now()  // Adiciona o timestamp para ordenação
      });

      Alert.alert('Sucesso', 'Evento adicionado com sucesso!');
      setAtividade('');
      setTituloEvento('');
      setDescricaoEvento('');
    } else {
      Alert.alert('Erro', 'Preencha todos os campos para adicionar o evento.');
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
              <Text style={estilos.texto_login}>Administração</Text>

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

              {/* Formulário para adicionar evento */}
              <View style={estilos.containerEvento}>
                <Text style={estilos.tituloEvento}>Adicionar Evento </Text>

                <TextInput
                  style={estilos.input_text}
                  placeholder="Esporte (ex: futsal, balé)"
                  value={atividade}
                  onChangeText={setAtividade}
                />

                <TextInput
                  style={estilos.input_text}
                  placeholder="Título do Evento"
                  value={tituloEvento}
                  onChangeText={setTituloEvento}
                />

                <TextInput
                  style={[estilos.input_text, { height: 100, textAlignVertical: 'top' }]}
                  placeholder="Descrição do Evento"
                  value={descricaoEvento}
                  onChangeText={setDescricaoEvento}
                  multiline
                />

                <TouchableOpacity style={estilos.botao} onPress={adicionarEvento}>
                  <Text style={estilos.texto_botao}>Adicionar Evento</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão flutuante para redirecionar ao Cadastro de Professores */}
      <TouchableOpacity
        style={estilos.botaoCadastroProf}
        onPress={IrParaCadastroProfessor}
      >
        <Text style={estilos.textoBotaoCadastroProf}>Cadastrar Professor</Text>
      </TouchableOpacity>

      {/* Novo botão para redirecionar ao Cadastro geral */}
     
    </View>
  );
}
