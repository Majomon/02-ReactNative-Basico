import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {/* <HelloWorldScreen name="Mauricio Monzón" /> */}
        {/*  <CounterScreen /> */}
        {/*   <CounterM3Screen /> */}
        {/*  <BoxObjectModelScreen /> */}
        <DimensionScreen />{/*  */}
      </SafeAreaView>
    </PaperProvider>
  );
};
