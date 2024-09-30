import { StyleSheet } from "react-native";

const estilos=StyleSheet.create({
   body:{
    position:"relative",
    flex:1,
    display:'flex',
    flexDirection:"column",
    backgroundColor:'#075070'
   },
   top:{
    flex:3,
    justifyContent:'center',
    alignItems:'center',
   },
   texto_top:{
    fontSize:30,
    fontWeight:'500',
    fontFamily:'Arial'
   },
   bottom:{
    flex:8,
    backgroundColor:'#F0F0F0',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    textAlign:'center',
   },
   input_text:{
    backgroundColor:'#D3D3D3',
    height:50,
    width:320,
    borderRadius:5,
    textAlign:'center',
    marginBottom:40,
    color:'#79a4b3',
    fontWeight:'900',
    fontSize:20
   },
   fonte_senha:{fontSize:17},
   container_senha:{
    marginBottom:15
   },
   link_senha:{color:'blue'},
   botao:{
    width:320,
    paddingVertical:10,
    backgroundColor:'#075070',
   },
   texto_botao:{
    textAlign:'center',
    color:'#F0F0F0',
    fontSize:18
   },
   container_main__login:{
        display:'flex',
        height:600,
        alignItems:'center',
    },
    container_login:{
        marginTop:40,
        width:400,
        alignItems:'center'
    },
    texto_login:{
        fontSize:40,
        fontWeight:'600',
        marginBottom:30
    },
    container_img:{
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    img:{
        width: 100, 
        height: 100, 
        resizeMode: 'contain',
        borderWidth:3,
        borderColor:'#78a6bd',
        borderRadius:100,
        marginTop:30
    }


})

export default estilos