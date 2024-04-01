import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text>Hola mundo!!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 50,
    padding:5
  },
});
