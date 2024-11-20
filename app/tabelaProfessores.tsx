import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StatusBar, Image } from 'react-native';
import estilos from './estilo';
import { ObterProfessores } from './db';

// Definindo a interface para o tipo de dados do professor
interface Professor {
    nome: string;
    materia: string;
    // Adicione outras propriedades se necessário
}

export default function TabelaProfessores() {
    // Usando a interface Professor para definir o tipo do estado
    const [professores, setProfessores] = useState<Professor[]>([]);

    useEffect(() => {
        const fetchProfessores = async () => {
            const dadosProfessores = await ObterProfessores();
           
            if (dadosProfessores) {
                setProfessores(Object.values(dadosProfessores));
            }
        };
        fetchProfessores();
    }, []);

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
                        <Text style={estilos.texto_login}>Lista de Professores</Text>
                        <ScrollView>
                            {professores.map((professor, index) => (
                                <View key={index} style={estilos.linha}>
                                    <Text style={estilos.coluna}>
                                        {professor.nome || "Nome não disponível"}
                                    </Text>
                                    
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
}
