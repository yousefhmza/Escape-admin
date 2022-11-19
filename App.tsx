import {StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'transparent'} animated translucent />
      <Navigation />
    </>
  );
};

export default App;
