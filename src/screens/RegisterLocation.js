import React, {useState,useEffect}from 'react';
import {View,Text, ScrollView,Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../../styles'
import database from '@react-native-firebase/database'
export default ()=>{
    const [nameLocation,setNameLocation] = useState('')
    const [date,setData] = useState('')
    
    const cadastrar=()=>{
        let local = database().ref('/bd/Location');
        let chave = local.push().key;
        local.child(chave).set({
            nome:nameLocation,
            data:date
        });
        Alert.alert("Usuário Inserido");
    }
     
    return (
        <View style={styles.body}>
        <ScrollView style={styles.areaScroll}>
            <View style={styles.areaInfo}>
            <Text style={styles.inputText}>Nome do Local</Text>
            <TextInput style={styles.input} keyboardType='number-pad' value={nameLocation} onChangeText={(t) => setNameLocation(t)}/>
            <Text style={styles.inputText}>Data</Text>
            <TextInput style={styles.input} keyboardType='number-pad' value={date} onChangeText={(t) => setData(t)}/>
            <TouchableOpacity style={styles.calcularButtonArea} onPress={cadastrar}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    );
    }