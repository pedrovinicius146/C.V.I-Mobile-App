import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set, get, child, update } from "firebase/database";
import { error } from "jquery";

// Configuração do Firebase
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVS7voyBbJfBXygWAknYvAcLZrB5e6_PQ",
  authDomain: "cvi-mobile-teste.firebaseapp.com",
  databaseURL: "https://cvi-mobile-teste-default-rtdb.firebaseio.com",
  projectId: "cvi-mobile-teste",
  storageBucket: "cvi-mobile-teste.firebasestorage.app",
  messagingSenderId: "561240747529",
  appId: "1:561240747529:web:2e5a7a13452e38be6612d8",
  measurementId: "G-4CYMN6FNB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Função para validar e-mail
function validarEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Função para cadastrar o aluno
async function CadastrarAluno(nome: string, email: string, senha: string,rota:any) {
  if (!validarEmail(email)) {
    alert('E-mail inválido');
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;
    await updateProfile(user, { displayName: nome });
    await sendEmailVerification(user);
    
    const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-'));
    await set(ref(database, `Alunos/${emailSeguro}`), {
      nome: nome,
      email: email,
      autorizado: false,
      uid: user.uid,
      senha: senha
    });

    alert('Cadastro realizado com sucesso! Um e-mail de verificação foi enviado para você.');
    rota.push('/')
  } catch (e: any) {
    console.error('Erro no Cadastro:', e);
    alert('Erro no Cadastro: ' + (e.message || 'Ocorreu um erro inesperado.'));
  }
}

// Função para cadastrar professores
async function CadastrarProfessor(nome: string, email: string, senha: string) {
  if (!validarEmail(email)) {
    alert('E-mail inválido');
    return;
  }

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
    alert('Erro no Cadastro ' );
  }
}

// Função para autenticar o usuário (aluno ou professor)
async function autenticarUsuario(email: string, senha: string, rota: any) {
  const referencia = ref(database);
  const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-'));

  try {
    const professorSnapshot = await get(child(referencia, `Professores/${emailSeguro}`));

    if (professorSnapshot.exists()) {
      const professor = professorSnapshot.val();
      if (professor.senha === senha) {
        alert('Login realizado com sucesso! Bem-vindo, Professor!');
        rota.push('/admin');
      } else {
        alert('Senha incorreta para professor.');
      }
      return;
    }

    const alunoSnapshot = await get(child(referencia, `Alunos/${emailSeguro}`));

    if (alunoSnapshot.exists()) {
      const aluno = alunoSnapshot.val();
      if (aluno.senha === senha) {
        if (aluno.autorizado) {
          alert('Login realizado com sucesso! Bem-vindo, Aluno!');
          rota.push('/menu');
        } else {
          alert('Login não autorizado. Por favor, aguarde a autorização.');
        }
      } else {
        alert('Senha incorreta para aluno.');
      }
    } else {
      alert('Usuário não encontrado no banco de dados.');
    }
  } catch (e: any) {
    console.error('Erro ao tentar fazer login:', e);
    alert('Erro ao tentar fazer login: ' + (e.message || 'Ocorreu um erro inesperado.'));
  }
}

async function ObterAlunos() {
  const referencia = ref(database);

  try {
    const snapshot = await get(child(referencia, 'Alunos'));

    if (snapshot.exists()) {
      const alunos = snapshot.val();
      return alunos;
    } else {
      console.log('Nenhum dado encontrado para alunos.');
      return null;
    }
  } catch (e) {
    console.error('Erro ao obter dados dos alunos:', e);
    alert('Erro ao obter dados dos alunos: ' + String(e));
  }
}

async function ObterProfessores() {
  const referencia = ref(database);

  try {
    const snapshot = await get(child(referencia, 'Professores'));

    if (snapshot.exists()) {
      const professores = snapshot.val();
      console.log('Dados dos professores:', professores);
      return professores;
    } else {
      console.log('Nenhum dado encontrado para professores.');
      return null;
    }
  } catch (e) {
    console.error('Erro ao obter dados dos professores:', e);
    alert('Erro ao obter dados dos professores: ' + String(e));
  }

}
async function AtualizarAluno(email: string, dados: object) {
  const emailSeguro = email.replace(/[@.]/g, (char) => (char === '@' ? '_' : '-'));
  try {
    await update(ref(database, `Alunos/${emailSeguro}`), dados);
    console.log(`Aluno ${email} atualizado com sucesso.`);
  } catch (e: any) {
    console.error('Erro ao atualizar aluno:', e);
    throw e;
  }
}


export { CadastrarAluno, autenticarUsuario, CadastrarProfessor, ObterAlunos, ObterProfessores,AtualizarAluno, database };
