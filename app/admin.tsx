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
    // Verificação de atividade permitida
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
              <TouchableOpacity
        style={estilos.botaoCadastroProf}
        onPress={IrParaCadastroProfessor}
      >
        <Text style={estilos.textoBotaoCadastroProf}>Cadastrar Professor</Text>
      </TouchableOpacity>
              
            </View>
          </View>
        </View>
        
      </ScrollView>

      {/* Botão flutuante para redirecionar ao Cadastro de Professores */}
      
    </View>
  );
}
