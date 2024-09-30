import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


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


function gerarSenha(tamanho:number) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let senha = '';
    
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    
    return senha;
}



function CadastrarAluno(matricula:string, nome:string, email:string) {
  const referencia = ref(database, 'Alunos/' + matricula); 

  set(referencia, {
    matricula: matricula,
    nome: nome,
    email: email,
    senha:gerarSenha(8)
  })
  .then(() => {
    console.log('Gravado com sucesso');
  })
  .catch((e) => {
    console.log('Erro: ' + e);
  });
}



export default CadastrarAluno;