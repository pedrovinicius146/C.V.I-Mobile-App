import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import bcrypt from 'bcryptjs';  // Biblioteca para fazer hash da senha

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVS7voyBbJfBXygWAknYvAcLZrB5e6_PQ",
  authDomain: "cvi-mobile-teste.firebaseapp.com",
  databaseURL: "https://cvi-mobile-teste-default-rtdb.firebaseio.com",
  projectId: "cvi-mobile-teste",
  storageBucket: "cvi-mobile-teste.appspot.com",
  messagingSenderId: "561240747529",
  appId: "1:561240747529:web:2e5a7a13452e38be6612d8",
  measurementId: "G-4CYMN6FNB8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Função para gerar uma senha aleatória
function gerarSenha(tamanho: number) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let senha = '';
    
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    
    return senha;
}

// Função para validar e-mail
function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para cadastrar o aluno
async function CadastrarAluno(matricula: string, nome: string, email: string) {
  if (!validarEmail(email)) {
    alert('E-mail inválido');
    return;
  }

  const referencia = ref(database);
  
  try {
    // Verifica se a matrícula já existe
    const snapshot = await get(child(referencia, `Alunos/${matricula}`));
    if (snapshot.exists()) {
      alert('Matrícula já cadastrada');
      return;
    }

    // Gera a senha aleatória
    const senhaGerada = gerarSenha(8);

    // Faz o hash da senha usando bcrypt
    const saltRounds = 10;  // Número de rounds para gerar o salt
    const hashedSenha = await bcrypt.hash(senhaGerada, saltRounds);

    // Cadastra o aluno no Firebase
    await set(ref(database, 'Alunos/' + matricula), {
      matricula: matricula,
      nome: nome,
      email: email,
      senha: hashedSenha // Armazena a senha já com o hash
    });

    alert('Cadastro realizado com sucesso');
  } catch (e) {
    alert('Erro no Cadastro: ');
  }
}

export default CadastrarAluno;
