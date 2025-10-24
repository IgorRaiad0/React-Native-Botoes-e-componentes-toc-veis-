import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback  } from 'react-native';

export default function App() {

  const aoPrecionar = () =>{
    alert('O botão foi pressionado!')
  }

  const desafioBtn1 = () =>{
    alert('Botão 1 do desafio foi pressionado');
  }

  return (
    <View style={styles.container}>

      <Text>Exemplo de um botão comum.</Text>

      <Button color='red'
      onPress={aoPrecionar} title="Aperte aqui!"/>

      <Text>Exemplo de um botão que escurece ao ser pressionado.</Text>

      <TouchableHighlight
      onPress={() => aoPrecionar('TouchableHighlight')}
      underlayColor='black'>
      <View style={styles.containerBtn}>
        <Text style={styles.textBtn}> TouchableHighlight</Text>
      </View>
      </TouchableHighlight>

      <Text>Exemplo de um botão que fica transparente ao ser precionado.</Text>

      <TouchableOpacity onPress={aoPrecionar} activeOpacity={0.4}>
        <View style={styles.containerBtn}>
          <Text style={styles.textBtn}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

    <Text>Exemplo de um botão que tem uma ondulação(Android somente).</Text>
      <View>
        <TouchableNativeFeedback onPress={()=> aoPrecionar('Ripple!')}>
            <View style={styles.containerBtn}>
            <Text style={styles.textBtn}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <Text>Exemplo de um botão exibe uma menssagem ao precionar e segurar.</Text>

      <TouchableHighlight
      onLongPress={() => alert('Precionado por mais tempo!')}>
      <View style={styles.containerBtn}>
        <Text style={styles.textBtn}> Precione e segure</Text>
      </View>
      </TouchableHighlight>


      

       <View style={styles.desafio}>

        <Text> PARTE DO DESAFIO!</Text>

      <TouchableHighlight
      onPress={() => desafioBtn1('TouchableHighlight'), alert('Está pressionando por muito tempo!')}
      underlayColor='black'>
      <View style={styles.containerBtn}>
        <Text style={styles.textBtn}> TouchableHighlight</Text>
      </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={()=> alert('O segundo botão foi pressionado'), activeOpacity={0.8}}>
        <View style={styles.containerBtn}>
          <Text style={styles.textBtn}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <View>
        <TouchableNativeFeedback onPress={()=> alert('O botão do android foi acionado')('Ripple!')}>
            <View style={styles.containerBtn}>
            <Text style={styles.textBtn}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
  },

  containerBtn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,

  },

  textBtn: {
    color: 'white',
    fontWeight: 'bolder',

  },
  desafio: {
    backgroundColor: 'rgba(255, 255, 0, 0.52)',
    width: '90%',
    padding: 20,
    gap:10,
    alignItems: 'center',
    marginTop: 10,
  }
});
