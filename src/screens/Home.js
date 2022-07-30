import React, {useState}from 'react';
import {View,Text, ScrollView,Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from '../../styles'
export default() => {
    const [altitude, setAltitude] = useState(0);
    const [temperatura, setTemperatura] = useState(0);
    const [od, setOd] = useState(0);
    const [coli, setColi] = useState('');
    const [ph, setPh] = useState(0);
    const [dbo5, setDbo5] = useState('');
    const [nitrogenio, setNitrogenio] = useState(0);
    const [fosforo, setFosforo] = useState(0);
    const [turbidez, setTurbidez] = useState('');
    const [solidos, setSolidos] = useState('');
    let pesoOd=0.17
    let pesoColiformes=0.17
    let pesoPh=0.12
    let pesoDbo=0.10
    let pesoNitrogenio=0.10
    let pesoSolidos=0.08
    let pesoFosforo=0.10
    let pesoTurbidez=0.08
    let pesoDifTemperatura=0.10
    let qiDifTemperatura=94.0
    let qiColiformes=0
    let qiPh=0
    let qiDbo=0
    let qiNitrogenio=0
    let iqaFosforo=0
    let qiTurbidez=0
    let qiSolidos=0
    let qiOd=0
    let valColiformes=0
    let valFosforo=0
    let concentracaoSaturacao=0
    let porcentagemSaturacao=0
    let valQiOd=0
    let valQiPh=0
    let valQiDbo=0
    let valQiSolidos=0
    let valQiTurbidez=0
    let valQiNitrogenio=0
    let valQiColiformes=0
    let valQiDifTemperatura=0
    let valQiFosforo=0
    let iqa=0
 
    const calcular=()=>{
       valColiformes=Math.log10(coli)
       valFosforo=fosforo*3.066
       concentracaoSaturacao=(14.62-0.3898*temperatura+0.006969*temperatura**2-0.00005896*temperatura**3)*(1-0.0000228675*altitude)**5.167
       porcentagemSaturacao=((od*100)/concentracaoSaturacao)
       comparacao()
       valQiOd=qiOd**pesoOd
       valQiPh=qiPh**pesoPh
       valQiDbo=qiDbo**pesoDbo
       valQiSolidos=qiSolidos**pesoSolidos
       valQiTurbidez=qiTurbidez**pesoTurbidez
       valQiNitrogenio=qiNitrogenio**pesoNitrogenio
       valQiColiformes=qiColiformes**pesoColiformes
       valQiDifTemperatura=qiDifTemperatura**pesoDifTemperatura
       valQiFosforo= iqaFosforo**pesoFosforo
       iqa= valQiOd*valQiPh*valQiDbo*valQiSolidos*valQiTurbidez*valQiNitrogenio*valQiColiformes*valQiDifTemperatura*valQiFosforo
       if (iqa>=0 & iqa<=25){
            Alert.alert("IQA muito ruim, valor)"+iqa.toFixed(2))
       }else if ( iqa>=25 & iqa<=50){
            Alert.alert("IQA ruim, valor)"+iqa.toFixed(2))
       }else if ( iqa>=50 & iqa<=70){
            Alert.alert("IQA médio, valor)"+iqa.toFixed(2))
       }else if ( iqa>=70 & iqa<=90){
            Alert.alert("IQA bom, valor)"+iqa.toFixed(2))
       }else if ( iqa>=90 & iqa<=100){
            Alert.alert("IQA excelente, valor) "+iqa.toFixed(2))
    }
}

    const comparacao=()=>{

//Comparação OD
        if (porcentagemSaturacao>=0 & porcentagemSaturacao<=50){
            qiOd=3+0.34*porcentagemSaturacao+0.008095*porcentagemSaturacao**2+1.35252*0.00001*porcentagemSaturacao**3
        }else if ( porcentagemSaturacao>=50 & porcentagemSaturacao<=85){
            qiOd=3-1.166*porcentagemSaturacao+0.058*porcentagemSaturacao**2-3.803435*0.0001*porcentagemSaturacao**3
        }else if ( porcentagemSaturacao>=85 & porcentagemSaturacao<=100){
            qiOd=3+3.7745*porcentagemSaturacao**0.704889
        }else if ( porcentagemSaturacao>=100 & porcentagemSaturacao<=140){
            qiOd=3+2.9*porcentagemSaturacao-0.02496*porcentagemSaturacao**2+5.60919*0.00001*porcentagemSaturacao**3
        }else if ( porcentagemSaturacao>=140 & porcentagemSaturacao<=1000){
            qiOd=3+47
        }
        
//Comparação Coliformes
        if (valColiformes>=0 & valColiformes<=1){
            qiColiformes=100-33*valColiformes
        }else if ( valColiformes>=1 & valColiformes<=5){
            qiColiformes=100-37.2*valColiformes+3.60743*valColiformes**2
        }else if ( valColiformes>=5 & valColiformes<=30){
            qiColiformes=3.0
        }

//Comparação pH
        if (ph>=0 & ph<=2){
            qiPh=2
        }else if ( ph>=2 & ph<=4){
            qiPh=13.6-10.6*ph+2.4364*ph**2
        }else if ( ph>=4 & ph<=6.2){
            qiPh=155.5-77.36*ph+10.2481*ph**2
        }else if ( ph>=6.2 & ph<=7){
            qiPh=-657.2+197.38*ph-12.9167*ph**2
        }else if ( ph>=7 & ph<=8){
            qiPh=-427.8+142.05*ph-9.695*ph**2
        }else if ( ph>=8 & ph<=8.5){
            qiPh=216-16*ph
        }else if ( ph>=8.5 & ph<=9){
            qiPh=1415823*Math.exp(-1.1507*ph)
        }else if ( ph>=9 & ph<=10){
            qiPh=228-27*ph
        }else if ( ph>=10 & ph<=12){
            qiPh=633-106.5*ph+4.5*ph**2
        }else if ( ph>=12 & ph<=14){
            qiPh=3
        }

//Comparação DBO
        if (dbo5>=0 & dbo5<=5){
            qiDbo=99.96*Math.exp(-0.1232728*dbo5)
        }else if ( dbo5>=5 & dbo5<=15){
            qiDbo=104.67-31.5463*Math.log10(dbo5)
        }else if ( dbo5>=15 & dbo5<=30){
            qiDbo=4394.91*dbo5**-1.99809
        }else if ( dbo5>=30 & dbo5<=100000){
            qiDbo=2
        }

//Comparação Nitrogenio
        if (nitrogenio>=0 & nitrogenio<=10){
            qiNitrogenio=100-8.169*nitrogenio+0.3059*nitrogenio**2
        }else if ( nitrogenio>=10 & nitrogenio<=60){
            qiNitrogenio=101.9-23.1023*Math.log10(nitrogenio)
        }else if ( nitrogenio>=60 & nitrogenio<=100){
            qiNitrogenio=159.3148*Math.exp(nitrogenio*(-0.0512842))
        }else if ( nitrogenio>=100 & nitrogenio<=100000){
            qiNitrogenio=1
        }

//Comparação Fósforo
        if (valFosforo>=0 & valFosforo<=1){
            iqaFosforo=99*Math.exp(-0.91629*valFosforo)
        }else if ( valFosforo>=1 & valFosforo<=5){
            iqaFosforo=57.6-20.178*valFosforo+2.1326*valFosforo**2
        }else if ( valFosforo>=5 & valFosforo<=10){
            iqaFosforo=19.8*Math.exp(-0.13544*valFosforo)
        }else if ( valFosforo>=10 & valFosforo<=10000){
            iqaFosforo=5
        }

//Comparação Turbidez
        if (turbidez>=0 & turbidez<=25){
            qiTurbidez=100.17-2.67*turbidez+0.03775*turbidez**2
        }else if ( turbidez>=25 & turbidez<=100){
            qiTurbidez=84.76*Math.exp(-0.016206*turbidez)
        }else if ( turbidez>=100 & turbidez<=10000){
            qiTurbidez=5
        }

//Comparação Sólidos
        if (solidos>=0 & solidos<=150){
            qiSolidos=79.75+0.166*solidos-0.001088*solidos**2
        }else if ( solidos>=150 & solidos<=500){
            qiSolidos=101.67 - 0.13917*solidos
        }else if ( solidos>=500 & solidos<=100000){
            qiSolidos=32
        }
    }

        return(
            <View style={styles.body}>
                <View style={styles.areaImage} >
                    <Image style={styles.image} source={require('../assets/logo_150.png')}/>
                </View>
                <ScrollView style={styles.areaScroll}>
                    <View style={styles.areaInfo}>
                    <Text style={styles.inputText}>Altitude(m)</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={altitude} onChangeText={(t) => setAltitude(t)}/>
                    <Text style={styles.inputText}>Temperatura(°C)</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={temperatura} onChangeText={(t) => setTemperatura(t)}/>
                    <Text style={styles.inputText}>OD da Amostra(mg/l)</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={od} onChangeText={(t) => setOd(t)}/>
                    <Text style={styles.inputText}>Coli Termotolerantes</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={coli} onChangeText={(t) => setColi(t)}/>
                    <Text style={styles.inputText}>pH</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={ph} onChangeText={(t) => setPh(t)}/>
                    <Text style={styles.inputText}>DBO5</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={dbo5} onChangeText={(t) => setDbo5(t)}/>
                    <Text style={styles.inputText}>Nitrogênio Total</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={nitrogenio} onChangeText={(t) => setNitrogenio(t)}/>
                    <Text style={styles.inputText}>Fósforo Total</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={fosforo} onChangeText={(t) => setFosforo(t)}/>
                    <Text style={styles.inputText}>Turbidez</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={turbidez} onChangeText={(t) => setTurbidez(t)}/>
                    <Text style={styles.inputText}>Sólidos</Text>
                    <TextInput style={styles.input} keyboardType='number-pad' value={solidos} onChangeText={(t) => setSolidos(t)}/>
                    <TouchableOpacity style={styles.calcularButtonArea} onPress={calcular}>
                        <Text style={styles.buttonText}>Calcular</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    
}