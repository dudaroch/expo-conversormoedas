import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, useAnimatedValue } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorEntrada, setValorEntrada] = useState('33.33')
  const [resultado, setResultado] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View> 
        <Text style={styles.tbMoeda}> Moeda 1 </Text>
        <Picker
        selectedValue={moedaOrigem}
        onValueChange={(itemValue, itemIndex) =>
          setMoedaOrigem(itemValue)
        }>
        <Picker.Item label="Real Brasileiro" value="BRL" />
        <Picker.Item label="Dólar Americano" value="USD" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
        <Picker.Item label="Won Sul-Coreano" value="KRW" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Coroa Sueca" value="SEK" />
        </Picker>
      </View>
      <View> 
        <Text style={styles.tbMoeda}> Moeda 2 </Text>
        <Picker
        selectedValue={moedaDestino}
        onValueChange={(itemValue, itemIndex) =>
          setMoedaDestino(itemValue)
        }>
        <Picker.Item label="Real Brasileiro" value="BRL" />
        <Picker.Item label="Dólar Americano" value="USD" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
        <Picker.Item label="Won Sul-Coreano" value="KRW" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Coroa Sueca" value="SEK" />
        </Picker>
      </View>
      <View> 
        <Text style={styles.tbMoeda}> Valor para conversão </Text>
        <TextInput style={styles.input} value={valorEntrada}
        onChangeText={setValorEntrada}
        keyboardType='numeric'>
        </TextInput>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.title}> Converter </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.title}> Limpar </Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff'
  },

  picker: {
    color: '#fff',
    backgroundColor: '#000',
    width: 200,
    height: 50,
  },
  input: {
    color: '#fff',
    textAlign: 'right',
    height: 40,
  }, 
  tbMoeda: {
    color: '#fff'
  },
  button: {
    width: 200,
    height: 40,
    paddingBottom: 10,
    backgroundColor: '#999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
});
