import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      {/*   <Text style={style.title}>Hola mundo!!!</Text> */}
      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
/*   */
    backgroundColor: '#28C4D9',
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    color: 'black',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    top:0,
    left:50
  },
});
