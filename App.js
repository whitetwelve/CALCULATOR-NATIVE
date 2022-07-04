import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View, TextInput,TouchableOpacity } from 'react-native-web';
import { useState } from 'react';
import { extendTheme, Text } from 'native-base';



export default function App() {
    const [state, setState] = useState("")
    const [hitung, setHitung] = useState("")

      // Setup Font
  const fontConfig = Roboto_700Bold

    // Configuration Native Base Custom Theme
  const theme = extendTheme({
    fontConfig
  }) 

  const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fca5a5"
    },
    row : {
      position : 'absolute',
      marginTop : '1rem',
      marginLeft : '9rem',

    },
    row1 : {
      maxWidth : '9rem',
      position : 'absolute',
      top : '30vh',
      marginLeft : '2.3rem',
      color : 'black'
    },
    row2 : {
      maxWidth : '9rem',
      position : 'absolute',
      top : '30vh',
      marginLeft : '8.1rem'
    },
    row3 : {
      maxWidth : '9rem',
      position : 'absolute',
      top : '30vh',
      marginLeft : '13.9rem'
    },
    row4 : {
      maxWidth : '9rem',
      position : 'absolute',
      top : '30vh',
      marginLeft : '19.5rem'
    },
    row5 : {
      maxWidth : '9rem',
      position : 'absolute',
      top : '30vh',
      marginLeft : '19.5rem',
      marginTop: '20rem'
    },
    button : {
      width : '70px',
      height : '70px',
      marginBottom : '10px',
      backgroundColor : '#fb7185',
      alignItems : 'center',
      alignSelf : 'stretch',
      justifyContent : 'center',
      borderRadius : '10px'
    },
    button2 : {
      width : '70px',
      height : '70px',
      marginBottom : '10px',
      backgroundColor : '#b91c1c',
      fontFamily : 'Roboto_900Black',
      alignItems : 'center',
      alignSelf : 'stretch',
      justifyContent : 'center',
      fontSize : 25,
      color : 'white',
      borderRadius : '10px'
    },
    button3 : {
      width : '70px',
      height : '70px',
      marginBottom : '10px',
      backgroundColor : '#b91c1c',
      fontFamily : 'Roboto_900Black',
      alignItems : 'center',
      alignSelf : 'stretch',
      justifyContent : 'center',
      fontSize : 25,
      color : 'white',
      borderRadius : '10px'
    },
    btn : {
      flex : 1,
      alignItems : 'center',
      alignSelf:'stretch',
      justifyContent:'center'
    },
    text : {
      color : 'white',
      fontSize : 24
    }
})
  
  const getNumber = (value) => {
    setState(state + value + "" )
    console.log(state);
  }

  const kalkulasi = () => {
    setHitung(eval(state))
  }

  console.log(hitung);

    return (
      <NativeBaseProvider theme={theme}>
        <View style={styles.container}>
          <Text style={{
            color : '#f0fdf4',
            position : 'absolute',
            marginTop : '2.7vh',  
            fontFamily : 'Roboto',
            fontSize : '24px',
            marginLeft : '2.9rem'
          }}> Display</Text>
          <Text style={{
            color : 'BLACK',
            backgroundColor : 'rgba(236, 236, 236, 1)',
            fontSize : 25,
            textAlign : 'right',
            marginTop : '0.4vh',
            marginLeft: '3.1rem',
            position : 'absolute',
            height : '100px',
            top: '68px',
            width : '20.9rem',
            borderRadius : '10px'
          }}>{state}</Text>
          <View style={styles.row}>
            <Text style={{
            color : 'BLACK',
            backgroundColor : 'rgba(236, 236, 236, 1)',
            fontSize : 25,
            textAlign : 'right',
            height : '50px',
            width : '15rem',
            borderRadius : '10px'
          }}>{hitung}</Text>
          </View>
          <View style={styles.row1}>
            <TouchableOpacity onPress={() => getNumber(1)} style={styles.button}><Text style={styles.text}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(3)} style={styles.button}><Text style={styles.text}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(5)} style={styles.button}><Text style={styles.text}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(7)} style={styles.button}><Text style={styles.text}>7</Text></TouchableOpacity>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity onPress={() => getNumber(2)} style={styles.button}><Text style={styles.text}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(4)} style={styles.button}><Text style={styles.text}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(6)} style={styles.button}><Text style={styles.text}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(8)} style={styles.button}><Text style={styles.text}>8</Text></TouchableOpacity>
          </View>
          <View style={styles.row3}>
            <TouchableOpacity onPress={() => getNumber('-')} style={styles.button2}><Text style={styles.text}>-</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber('/')} style={styles.button2}><Text style={styles.text}>/</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber('%')} style={styles.button2}><Text style={styles.text}>%</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(9)} style={styles.button}><Text style={styles.text}>9</Text></TouchableOpacity>
          </View>
          <View style={styles.row4}>
            <TouchableOpacity onPress={() => getNumber('+')} style={styles.button2}><Text style={styles.text}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber('*')} style={styles.button2}><Text style={styles.text}>*</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => kalkulasi()} style={styles.button2}><Text style={styles.text}>=</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => getNumber(0)} style={styles.button}><Text style={styles.text}>0</Text></TouchableOpacity>
          </View>
          <View style={styles.row5}>
            <TouchableOpacity onPress={() => setState("")} style={styles.button3}><Text style={styles.text}>DEL</Text></TouchableOpacity>
          </View>
        </View>
      </NativeBaseProvider>
    );
  }


