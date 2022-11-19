import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useContext, useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {TAppStack} from '../../navigation/navigators/AppStack';
import {AuthContext} from '../../stores/auth/auth-context';
import {images} from '../../values/images';
import {styles} from './styles';
import {getAdmin} from '../../services/firebase-services';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import COLORS from '../../values/colors';

type TProps = NativeStackScreenProps<TAppStack, 'Splash'>;

const SplashScreen = ({navigation}: TProps) => {
  const authContext = useContext(AuthContext);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    let unsubscribe: () => void;

    const timer = setTimeout(() => {
      unsubscribe = auth().onAuthStateChanged(async firebaseUser => {
        if (firebaseUser) {
          authContext.onAuthSuccess(
            firebaseUser.uid,
            () => setRetry(prevState => !prevState),
            () => navigation.replace('Home'),
          );
        } else {
          navigation.replace('Auth');
        }
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [retry]);

  return (
    <View style={styles.screen}>
      <Image source={images.logo} style={styles.image} />
    </View>
  );
};

export default SplashScreen;
