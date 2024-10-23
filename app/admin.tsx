import React from 'react';
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import estilos from './estilo'; 

export default function AdminScreen() {
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
                </View>

                {/*
                <View style={estilos.linhaOpcoes}>
                  <Text style={estilos.colunaTitulo}>Disciplinas</Text>
                  <View style={estilos.colunaAcoes}>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                */}

                <View style={estilos.linhaOpcoes}>
                  <Text style={estilos.colunaTitulo}>Eventos</Text>
                  <View style={estilos.colunaAcoes}>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={estilos.linhaOpcoes}>
                  <Text style={estilos.colunaTitulo}>Alunos</Text>
                  <View style={estilos.colunaAcoes}>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={estilos.linhaOpcoes}>
                  <Text style={estilos.colunaTitulo}>Professores</Text>
                  <View style={estilos.colunaAcoes}>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Adicionar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botaoMenu}>
                      <Text style={estilos.botoesmenu}>Excluir</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
