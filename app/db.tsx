import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

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
const auth = getAuth(app);
const database = getDatabase(app);

// Função para cadastrar o aluno
async function CadastrarAluno(nome: string, email: string, senha: string) {
  try {
    // Criar usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // Atualizar o perfil do usuário para incluir o nome
    await updateProfile(user, { displayName: nome });

    // Enviar e-mail de verificação
    await sendEmailVerification(user);
    
    // Armazenar informações adicionais no Realtime Database
    const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-')); // Para garantir que o caminho é seguro
    await set(ref(database, `Alunos/${emailSeguro}`), {
      nome: nome,
      email: email,
      uid: user.uid, // Armazenando o uid para referência
    });

    alert('Cadastro realizado com sucesso! Um e-mail de verificação foi enviado para você.');
  } catch (e: any) {
    console.error('Erro no Cadastro:', e);
    alert('Erro no Cadastro: ' + (e.message || 'Ocorreu um erro inesperado.'));
  }
}

// Função para autenticar o aluno
async function autenticarAluno(email: string, senha: string, rota: any) {
  try {
    // Autenticar o usuário com email e senha
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    if (user.emailVerified) {
      alert('Login realizado com sucesso!');
      rota.push('/menu'); // Redirecionar após login bem-sucedido
    } else {
      alert('Por favor, verifique seu e-mail antes de fazer login.');
    }
  } catch (e: any) {
    console.error('Erro ao tentar fazer login:', e);
    alert('Erro ao tentar fazer login: ' + (e.message || 'Ocorreu um erro inesperado.'));
  }
}

export { CadastrarAluno, autenticarAluno };
