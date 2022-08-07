import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //AREA
    body:{
        flex:1,
        backgroundColor:'#ADD8E6',
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
    searchArea: {
        flex:1,
height:'100%',        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 10,
     },
     resultTextArea: {
        height: '100%',
        flex: 1,
        borderLeftWidth: 0.55,
        justifyContent: 'center',
        borderLeftColor: '#0000002f',
     }, 
     searchResultArea: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        alignSelf:'center',
        marginTop: 15,
        paddingTop:20
     },

                          resultSeparator: {
                            width: '80%',
                            borderTopWidth: 0.55,
                            alignSelf: 'center',
                            borderColor: '#0000002f',
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