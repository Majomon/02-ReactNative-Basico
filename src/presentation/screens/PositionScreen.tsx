import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.container}>
    {/*   <Text style={style.title}>Hola mundo!!!</Text> */}
    <View style={style.purpleBox}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  title: {
    color: 'black',
  },
  purpleBox:{
    width:100,
    height:100,
    backgroundColor:"#5856D6",
    borderWidth:10,
    borderColor:"white"
  }
});
