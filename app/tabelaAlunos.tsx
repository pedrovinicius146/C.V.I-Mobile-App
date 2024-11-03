import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StatusBar, Image } from 'react-native';
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

    useEffect(() => {
        const fetchAlunos = async () => {
            const dadosAlunos = await ObterAlunos();
            if (dadosAlunos) {
                // Converte os dados retornados em um array de Aluno
                const alunosArray: Aluno[] = Object.values(dadosAlunos).filter((aluno): aluno is Aluno => !aluno.autorizado);
                setAlunos(alunosArray);
            } else {
                console.log('Nenhum aluno encontrado');
            }
        };
        fetchAlunos();
    }, []);

    // Modifica para true
    async function autorizarAluno(email: string) {
        try {
            await AtualizarAluno(email, { autorizado: true });
            Alert.alert('Sucesso', 'Aluno autorizado com sucesso!');
            // Remove o que foi modificado para true
            setAlunos(alunos.filter(aluno => aluno.email !== email));
        } catch (error) {
            console.error('Erro ao autorizar aluno:', error);
            Alert.alert('Erro', 'Não foi possível autorizar o aluno.');
        }
    }

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
                        <Text style={estilos.texto_login}>Lista de Alunos Não Autorizados</Text>
                        <ScrollView>
                            {alunos.map((aluno, index) => (
                                <View key={index} style={estilos.linhaOpcoes}>
                                    <Text style={estilos.colunaTitulo}>
                                        {aluno.nome || "Nome não disponível"}
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
    );
}
