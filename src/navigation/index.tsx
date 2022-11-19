import {NavigationContainer} from '@react-navigation/native';
import NetworkInfoWrapper from '../components/organisms/NetworkInfoWrapper';
import AuthContextProvider from '../stores/auth/auth-context';
import AppStack from './navigators/AppStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <NetworkInfoWrapper>
        <AuthContextProvider>
          <AppStack />
        </AuthContextProvider>
      </NetworkInfoWrapper>
    </NavigationContainer>
  );
};

export default Navigation;
