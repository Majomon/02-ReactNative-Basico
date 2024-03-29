import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Mauricio Monzón" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
