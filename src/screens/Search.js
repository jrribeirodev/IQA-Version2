import React, {useEffect, useState}from 'react';
import {View,Text, ScrollView,Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../../styles'
import database from '@react-native-firebase/database'

export default() => {
    const [list, setList] = useState();

    useEffect(() => {
        database()
         .ref('/bd/Location')
         .on('value', (snapshot) => {
            let object = [];
            snapshot.forEach((childItem) => {
               object.push(childItem.val());
            });
            setList(object)
    })
})
    
        return(
            <View style={styles.body}>
                <View style={styles.searchArea}>
                    <FlatList 
                    data={list} 
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.resultTextArea}>
                            <TouchableOpacity style={styles.searchResultArea}>
                                <Text>{item.nome}</Text>
                                <Text>{item.data}</Text>
                            </TouchableOpacity>
                                <View style={styles.resultSeparator} />
                            </View>
                            
                        )
                    }}/>
            </View>
            </View>
          
        );
    
}