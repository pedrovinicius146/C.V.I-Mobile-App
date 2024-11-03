import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set, get, child, update } from "firebase/database";
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


// Função para validar e-mail
function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para cadastrar o aluno

async function CadastrarAluno(nome: string, email: string,senha:string) {
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

// Função para cadastrar Professores
async function CadastrarProfessor(nome:string, email:string, senha:string) {
  if (!validarEmail(email)) {
    alert('E-mail inválido');
    return;
  }

  const database = getDatabase();
  const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-'));

  try {
    await set(ref(database, `Professores/${emailSeguro}`), {
      nome: nome,
      email: email,
      senha: senha
    });
    alert('Cadastro realizado com sucesso.');
  } catch (e) {
    console.error('Erro no Cadastro:', e);
    alert('Erro no Cadastro: ' + (typeof e === 'object' && e !== null && 'message' in e ? e.message : 'Ocorreu um erro inesperado.'));
  }
}


async function autenticarAluno(email: string, senha: string,rota:any) {
  const referencia = ref(database);
  
  // Substituindo o @ por _ e . por - para criar um caminho válido
  const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-'));
  
  try {
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

// Função para obter todos os dados dos alunos
async function ObterAlunos() {
  const referencia = ref(database);

  try {
    const snapshot = await get(child(referencia, 'Alunos'));

    if (snapshot.exists()) {
      const alunos = snapshot.val();
      ;
      return alunos; // Retorna os dados dos alunos
    } else {
      console.log('Nenhum dado encontrado para alunos.');
      return null;
    }
  } catch (e) {
    console.error('Erro ao obter dados dos alunos:', e);
    alert('Erro ao obter dados dos alunos: ' + String(e));
  }
}

// Função para obter todos os dados dos professores
async function ObterProfessores() {
  const referencia = ref(database);

  try {
    const snapshot = await get(child(referencia, 'Professores'));

    if (snapshot.exists()) {
      const professores = snapshot.val();
      console.log('Dados dos professores:', professores);
      return professores; // Retorna os dados dos professores
    } else {
      console.log('Nenhum dado encontrado para professores.');
      return null;
    }
  } catch (e) {
    console.error('Erro ao obter dados dos professores:', e);
    alert('Erro ao obter dados dos professores: ' + String(e));
  }
}

async function AtualizarAluno(email:string, dados:object) {
  const emailSeguro = email.replace(/[@.]/g, char => (char === '@' ? '_' : '-'));
  const referencia = ref(database, `Alunos/${emailSeguro}`);

  try {
    await update(referencia, dados);
    console.log(`Aluno ${email} atualizado com sucesso.`);
  } catch (e) {
    console.error('Erro ao atualizar aluno:', e);
    throw e;
  }
}



export { CadastrarAluno, autenticarAluno, CadastrarProfessor, ObterAlunos, ObterProfessores, AtualizarAluno };