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
   container_senha: {
      marginBottom: 15
   },
   link_senha: { color: 'blue' },
   botao: {
      width: 300,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 15,
      paddingVertical: 10,
      backgroundColor: '#075070',
      marginBottom: 0, // ajuste para aproximar os ícones
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
      marginTop: 40,
      width: 400,
      alignItems: 'center'
   },
   texto_login: {
      fontSize: 40,
      fontWeight: '500',
      marginBottom: 30
   },
   container_img: {
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
      marginTop: 30
   },
   container_imagens: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   imagem_rodape: {
      width: 140,
      height: 100,
   },
   imagem_rodapewpp: {
      width: 80,
      height: 100,
      marginBottom: 10 // ajuste para aproximar os ícones
   },
   logo: {
      width: 100,
      height: 100,
   },
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
      width: '38%',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 5,
      borderRadius: 40,
      borderColor: '#075070',
   },
   image: {
      width: 60,
      height: 120,
      resizeMode: 'contain',
   },
   iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginTop: 10, // ajuste para subir os ícones
   },
   container_rodape: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
       // ajuste para subir o rodapé
   },
   iconContainer1: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
   },
   imagemIconeWpp: {
      width: 40,
      height: 40,
   },
   imagemIconeInstagram: {
      width: 40,
      height: 40,
      marginLeft: 10,
   },
});

export default estilos;
