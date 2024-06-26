import {StyleSheet, View} from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
    /*   flexDirection:"row",
    justifyContent:"space-between" */
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    /*     flex: 2, */
    /*     alignSelf:"flex-end", */
    /*     alignSelf: 'flex-end', */
    backgroundColor: '#5856D6',
    /*    top: 100, */
  },
  orangeBox: {
    /*     flex: 2, */
    /*     flex:1, */
    backgroundColor: '#F0A23B',
    /*  right: -100, */
    top: 50,
  },
  blueBox: {
    /*     flex: 4, */
    /*    alignSelf:"center", */
    /*     width:"100%", */
    backgroundColor: '#28C4D9',
    /*     alignSelf: 'flex-start', */
  },
});
