import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StatusBar, Image, KeyboardAvoidingView, Platform } from 'react-native';
import estilos from './estilo';
import { ObterAlunos, AtualizarAluno } from './db';

// Definindo a interface para o tipo de dados do aluno
interface Aluno {
    nome: string;
    email: string;
    autorizado: boolean;
}

export default function TabelaAlunos() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    // Função para buscar os alunos não autorizados
    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const dadosAlunos = await ObterAlunos();
                console.log('Dados dos alunos:', dadosAlunos); // Verificar o que está sendo retornado
                if (dadosAlunos) {
                    const alunosArray: Aluno[] = Object.values(dadosAlunos).filter((aluno): aluno is Aluno => 
                        aluno.nome && aluno.email && aluno.autorizado === false
                    );
                    setAlunos(alunosArray);
                } else {
                    console.log('Nenhum aluno encontrado');
                }
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        };
        fetchAlunos();
    }, []);

    // Função para autorizar um aluno
    async function autorizarAluno(email: string) {
        try {
            await AtualizarAluno(email, { autorizado: true });
            Alert.alert('Sucesso', 'Aluno autorizado com sucesso!');
            // Remove o aluno da lista após autorização
            setAlunos(alunos.filter(aluno => aluno.email !== email));
        } catch (error) {
            console.error('Erro ao autorizar aluno:', error);
            Alert.alert('Erro', 'Não foi possível autorizar o aluno.');
        }
    }

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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
                                <Text style={estilos.texto_login}>Lista de Alunos Não Autorizados</Text>
                                
                                <ScrollView>
                                    {alunos.map((aluno, index) => (
                                        <View key={index} style={estilos.linha}>
                                            <Text style={estilos.coluna}>
                                                {aluno.nome || "Nome não disponível"} {/* Exibir nome ou fallback */}
                                            </Text>
                                            <TouchableOpacity style={estilos.botaoMenu} onPress={() => autorizarAluno(aluno.email)}>
                                                <Text style={estilos.botoesmenu}>Autorizar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
