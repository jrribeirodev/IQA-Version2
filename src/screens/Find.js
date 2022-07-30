import React, {useState}from 'react';
import {View,Text, ScrollView,Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../../styles'

export default() => {
    const [nameLocal, setNameLocal] = useState('');

        return(
            <View style={styles.body}>
                <View style={styles.areaImage} >
                    <Image style={styles.image} source={require('../assets/logo_150.png')}/>
                </View>
                <ScrollView style={styles.areaScroll}>
                    <View style={styles.areaInfo}>
                    <Text style={styles.inputText}>Digite o Nome do Local da Análise(m)</Text>
                    <TextInput style={styles.input} value={nameLocal} onChangeText={(t) => setNameLocal(t)}/>
                
                    <TouchableOpacity style={styles.calcularButtonArea} onPress={''}>
                        <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    
}