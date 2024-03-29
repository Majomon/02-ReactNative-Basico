import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Mauricio Monzón" /> */}
        {/*  <CounterScreen /> */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
