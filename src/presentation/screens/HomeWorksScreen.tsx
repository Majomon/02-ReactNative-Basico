import {StyleSheet, Text, View} from 'react-native';

export const HomeWorksScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent:"center"
  },
  box: {
    width: 100,
    height: 100,
    borderWidth:10,
    borderColor:"white"
  },
  purpleBox: {
    alignSelf:"flex-end",
    backgroundColor: '#5856D6',
  },
  orangeBox: {
/*     flex:1, */
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    alignSelf:"center",
/*     width:"100%", */
    backgroundColor: '#28C4D9',
  },
});
