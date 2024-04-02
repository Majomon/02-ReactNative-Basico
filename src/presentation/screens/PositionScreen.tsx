import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
      {/*   <Text style={style.title}>Hola mundo!!!</Text> */}
      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
      <View style={style.greenBox} />

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
/*     justifyContent: 'center',
    alignItems: 'center', */
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
    position:"absolute",
    bottom:0
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position:"absolute",
    top: 0,
    right: 0,
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    position:"absolute",
    bottom: 0,
    right: 0,
    
  },
});
