import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function App() {

  const aoPrecionar = () =>{
    alert('O botão foi pressionado!')
  }

  const desafioBtn1 = () =>{
    alert('Botão 1 do desafio foi pressionado');
  }

   const desafioBtn2 = () =>{
    alert('Botão 2 do desafio foi pressionado');
  }

   const desafioBtn3 = () =>{
    alert('Botão 3 do desafio foi pressionado');
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
      
        <TouchableNativeFeedback onPress={()=> aoPrecionar('Ripple!') } >
            <View style={styles.containerBtn}>
            <Text style={styles.textBtn}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      

      <Text>Exemplo de um botão exibe uma menssagem ao precionar e segurar.</Text>

      <TouchableHighlight
      onLongPress={() => alert('Precionado por mais tempo!')}>
      <View style={styles.containerBtn}>
        <Text style={styles.textBtn}> Precione e segure</Text>
      </View>
      </TouchableHighlight>


      

       <View style={styles.desafio}>

        <Text> PARTE DO DESAFIO!</Text>

        <TouchableHighlight onPress={() => desafioBtn1('TouchableHighlight')}
          onLongPress={()=> alert('Você está segurando o botão 1 por muito tempo')}
          underlayColor='black'>
          <View style={styles.containerBtndesafio}>
            <Text style={styles.textBtndesafio}> TouchableHighlight</Text>
          </View>
        </TouchableHighlight>


      <TouchableOpacity onPress={desafioBtn2} activeOpacity={0.4} 
        onLongPress={()=> alert('Você está segurando o botão 2 por muito tempo')}>
        <View style={styles.containerBtndesafio2}>
        <Text style={styles.textBtn}>TouchableOpacity</Text>
        <FontAwesome name="user" size={40} color="#fff" />
        </View>
      </TouchableOpacity>

        <TouchableNativeFeedback onPress={()=> desafioBtn3('Ripple!') } 
            onLongPress={()=> alert('Por que o efeito Ripple não funciona?')} >
            <View style={styles.containerBtndesafio3}>
            <Text style={styles.textBtn}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      

      

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
  },
  containerBtndesafio:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },

  textBtndesafio:{
    color: 'yellow',
    fontWeight: 'bold',

  },

  containerBtndesafio2: {
    backgroundColor: 'rgba(0, 128, 255, 1)',
    padding: 15, // Reduzi um pouco para um visual mais compacto
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: 10,
    elevation: 8,
  },

  containerBtndesafio3:{
    backgroundColor: 'rgba(58, 168, 69, 1)',
    padding: 10,
    borderRadius: 20,
  }


});
