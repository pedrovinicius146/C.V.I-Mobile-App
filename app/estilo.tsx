import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
   body: {
      position: "relative",
      flex: 1,
      display: 'flex',
      flexDirection: "column",
      backgroundColor: '#075070'
   },
   top: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
   },
   texto_top: {
      fontSize: 30,
      fontWeight: '500',
      fontFamily: 'Arial'
   },
   bottom: {
      flex: 8,
      backgroundColor: '#F0F0F0',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      textAlign: 'center',
   },
   input_text: {
      backgroundColor: '#D3D3D3',
      height: 50,
      width: 320,
      borderRadius: 5,
      textAlign: 'center',
      marginBottom: 20,
      color: '#79a4b3',
      fontWeight: '900',
      fontSize: 20
   },
   fonte_senha: { fontSize: 17 },
   container_senha: { marginBottom: 15 },
   link_senha: { color: 'blue' },
   botao: {
      width: 300,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 15,
      paddingVertical: 10,
      backgroundColor: '#075070',
      marginBottom: 10,
   },
   texto_botao: {
      textAlign: 'center',
      color: '#F0F0F0',
      fontSize: 18
   },
   container_main__login: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   container_login: {
      marginTop: 100,
      width: 400,
      alignItems: 'center'
   },
   texto_login: {
      fontSize: 40,
      fontWeight: '500',
      marginBottom: 30
   },
   container_img: {
      marginTop: 20,
      marginBottom: 40,
      justifyContent: 'center',
      alignItems: 'center',
   },
   img: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      borderWidth: 3,
      borderColor: '#78a6bd',
      borderRadius: 100,
      marginTop: 50,
   },
   container_imagens: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   imagem_rodape: { width: 140, height: 100 },
   imagem_rodapewpp: { width: 80, height: 100, marginBottom: 10 },
   logo: { width: 100, height: 100 },
   container_main__menu: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   texto_menu: {
      fontSize: 24,
      marginBottom: 20,
   },
   container_opcoes: {
      marginBottom: 20,
   },
   botao_menu: {
      backgroundColor: '#075070',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
   },
   container_menu_opcoes: {
      width: 340,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginVertical: 20,
      marginTop: 40
   },
   imageContainer: {
      width: '44%',
      height: '30%',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 4,
      borderRadius: 45,
      borderColor: '#075070',
      padding: 4
   },
   nomeImagem: {
      marginBottom: 5,
      fontSize: 16,
      color: '#075070',
      textAlign: 'center',
   },
   imagemenu: {
      width: 65,
      height: 90,
      resizeMode: 'contain',
   },
   container_rodape: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,
   },
   iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 37,
      
   },
   imagemIconeInstagram: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      
      
   },
   containerOpcoes: {
      borderTopColor: '#ddd',
      borderTopWidth: 1,
      paddingVertical: 20,
      width: '90%',
      marginHorizontal: '5%',
      backgroundColor: '#fff',
      borderRadius: 10,
   },
   linhaOpcoes: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
   },
   cabecalho_Adm: {
      backgroundColor: '#075070',
      paddingVertical: 25,
      paddingHorizontal: 15,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
   },
   colunaTitulo: {
      flex: 1,
      fontSize: 16,
      color: '#333',
      textAlign: 'left',
      paddingHorizontal: 5,
      backgroundColor: '#ddd',
      borderRadius: 10,
      padding: 12,
      marginHorizontal: 6.3,
   },
   colunaAcoes: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 5,
   },
   headerCell: {
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 22,
      color: '#fff',
   },
   botoesmenu: {
      color: '#075070',
      fontWeight: 'bold',
   },
   botaoMenu: {
      backgroundColor: '#e8f1f5',
      padding: 12,
      borderRadius: 8,
      marginHorizontal: 6.3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
   },
   professor: {
      fontSize: 16,
      color: '#333',
   },
   containerEvento: {
      marginVertical: 20,
      alignItems: 'center',
   },
   tituloEvento: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#075070',
   },
   caixaEvento: {
      width: '100%',
      backgroundColor: '#E0E0E0',
      borderRadius: 10,
      padding: 20,
      marginTop: 10,
   },
   textoEvento: {
      fontSize: 16,
      color: '#333',
   },
   container_Calendario: {
      alignItems: 'center',
   },
   calendarioTitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#075070',
   },
   calendarioGrid: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: '100%',
   },
   imagemIconemenu2: {
      width: 50,
      height: 60,
      resizeMode: 'contain',
   },
   secaoSuperior: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      width: '100%',
      marginBottom: 20,
   },
   containermenu2: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   scrollCalendario: {
      height: 250,
      width: '100%',
      marginTop: 10,
   },
   horarioContainer: {
      backgroundColor: '#E0E0E0',
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 350,
      alignSelf: 'center',
   },
   horarioTexto: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
      marginBottom: 2,
   },
   acaoHorario: {
      fontSize: 14,
      color: '#333',
   },
   botaoCadastroProf: {
      position: 'absolute',
      top: 20, // Alinha o botão no topo
      left: 20, // Alinha o botão à esquerda
      backgroundColor: '#075070',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 25,
      elevation: 3, // Sombra
    },
    textoBotaoCadastroProf: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    botaoCadastro: {
      marginTop: 20, // Espaçamento entre o botão de login e o de cadastro
      backgroundColor: '#075070', // Cor de fundo
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5, // Bordas arredondadas
      elevation: 5, // Sombra
    },
  
    textoBotaoCadastro: {
      color: '#fff', // Cor do texto
      fontSize: 16, // Tamanho do texto
      fontWeight: 'bold', // Negrito
      textAlign: 'center', // Centraliza o texto no botão
    },
});

export default estilos;
