import {Image, ToastAndroid, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {VerticalSpace} from '../../components/atoms/Spaces';
import {rsHeight} from '../../utils/responsive';
import {images} from '../../values/images';
import {styles} from './styles';
import {Formik} from 'formik';
import {loginSchema} from '../../utils/schemas';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TAppStack} from '../../navigation/navigators/AppStack';
import {useContext, useState} from 'react';
import {AuthContext} from '../../stores/auth/auth-context';
import TextField from '../../components/molecules/TextField';
import AppButton from '../../components/molecules/AppButton';
import auth from '@react-native-firebase/auth';
import COLORS from '../../values/colors';
import Snackbar from 'react-native-snackbar';

type TProps = NativeStackScreenProps<TAppStack>;
type TValues = {email: string; password: string};

const AuthScreen = ({navigation}: TProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [retry, setRetry] = useState(false);
  const authcontext = useContext(AuthContext);

  const onSubmit = (values: TValues) => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(value => {
        setLoading(false);
        authcontext.onAuthSuccess(
          value.user.uid,
          () => setRetry(prevState => !prevState),
          () => navigation.replace('Home'),
        );
      })
      .catch(e => {
        Snackbar.show({text: e.message, duration: Snackbar.LENGTH_LONG, backgroundColor: COLORS.red});
        setLoading(false);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={images.logo} style={styles.image} />
      <VerticalSpace height={rsHeight(8)} />
      <Formik initialValues={{email: '', password: ''}} validationSchema={loginSchema} onSubmit={onSubmit}>
        {({handleBlur, handleChange, handleSubmit, values, errors, touched}) => {
          return (
            <>
              <TextField
                icon="mail-outline"
                placeholder="E-mail"
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email !== undefined && touched.email}
              />
              <VerticalSpace height={rsHeight(16)} />
              <TextField
                icon="lock-closed"
                placeholder="Password"
                name="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password !== undefined && touched.password}
              />
              <VerticalSpace height={rsHeight(48)} />
              {loading ? (
                <ActivityIndicator color={COLORS.red} size="large" />
              ) : (
                <AppButton title="Login" onPress={handleSubmit} style={styles.button} />
              )}
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AuthScreen;
