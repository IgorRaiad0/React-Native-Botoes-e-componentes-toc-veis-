import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {

  const aoPrecionar = () =>{
    alert('O botão foi pressionado!')
  }

  return (
    <View style={styles.container}>

      <Button 
      onPress={aoPrecionar} title="Aperte aqui!"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
