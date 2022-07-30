import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //AREA
    body:{
        flex:1,
        backgroundColor:'#ADD8E6',
        paddingBottom:20

    },
    areaImage:{
        paddingTop:50,
        alignItems:'center'
    },
    areaScroll:{
        paddingTop:20,
        paddingBottom:20
    },
    areaInfo:{
        alignItems:'center'
    },
    //IMAGEM
    image:{
        width:150,
        height:150
    },
    //TEXT e TEXTINPUT
    input:{
        width:350,
        backgroundColor:'white',
        borderRadius: 40,
        fontSize:16
    },
    inputText:{
        paddingTop:20,
        fontSize:16,
        color:'black'
    },
    //BOTÃO
    calcularButtonArea:{
      backgroundColor: 'white',
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 40,
      height: 45,
      width: 100,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
     }

})
export {styles}