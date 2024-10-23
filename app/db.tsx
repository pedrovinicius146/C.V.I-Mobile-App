import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
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
const auth = getAuth(app);
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

// Função para cadastrar o aluno no Firebase Authentication e no Realtime Database
async function CadastrarAluno(nome: string, email: string, senha: string) {
  if (!validarEmail(email)) {
    alert('E-mail inválido');
    return;
  }

  try {
    // Criar usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // Atualizar o perfil do usuário com o nome
    await updateProfile(user, { displayName: nome });

    // Enviar e-mail de verificação
    await sendEmailVerification(user);
    
    // Armazenar dados adicionais no Realtime Database
    const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-')); // Para criar um caminho válido
    await set(ref(database, `Alunos/${emailSeguro}`), {
      nome: nome,
      email: email,
      autorizado: false,
      uid: user.uid, // Armazenar o UID gerado pelo Authentication
      senha: senha // Armazenar a senha em texto simples ou hashada
    });

    alert('Cadastro realizado com sucesso! Um e-mail de verificação foi enviado para você.');
  } catch (e: any) {
    console.error('Erro no Cadastro:', e);
    alert('Erro no Cadastro: ' + (e.message || 'Ocorreu um erro inesperado.'));
  }
}

// Função para autenticar o aluno com Firebase Authentication e verificar no Realtime Database
async function autenticarAluno(email: string, senha: string, rota: any) {
  try {
    // Autenticar o usuário com Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    if (!user.emailVerified) {
      alert('Por favor, verifique seu e-mail antes de fazer login.');
      return;
    }

    // Verificar autorização no Realtime Database
    const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-'));
    const referencia = ref(database);
    const snapshot = await get(child(referencia, `Alunos/${emailSeguro}`));

    if (snapshot.exists()) {
      const aluno = snapshot.val();
      const autorizado = aluno.autorizado;

      if (autorizado) {
        alert('Login realizado com sucesso!');
        rota.push('/menu');
      } else {
        alert('Login não autorizado. Por favor, aguarde a autorização.');
      }
    } else {
      alert('Usuário não encontrado no banco de dados.');
    }
  } catch (e: any) {
    console.error('Erro ao tentar fazer login:', e);
    alert('Erro ao tentar fazer login: ' + (e.message || 'Ocorreu um erro inesperado.'));
  }
}

export { CadastrarAluno, autenticarAluno };
