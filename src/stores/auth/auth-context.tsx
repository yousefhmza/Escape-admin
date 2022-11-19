import {createContext, ReactNode, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {getAdmin} from '../../services/firebase-services';
import {TAdmin} from '../../utils/types';
import COLORS from '../../values/colors';

export type TAuthValues = {
  admin: TAdmin | null;
  setAdmin: (admin: TAdmin | null) => void;
  onAuthSuccess: (uid: string, retryCallback: () => void, navigationCallback: () => void) => void;
};

const initialValues: TAuthValues = {admin: null, setAdmin: () => {}, onAuthSuccess: () => {}};

export const AuthContext = createContext(initialValues);

type Tprops = {children: ReactNode};

const AuthContextProvider = ({children}: Tprops) => {
  const [admin, setAdmin] = useState<TAdmin | null>(null);

  const values: TAuthValues = {
    admin: admin,
    setAdmin: admin => setAdmin(admin),
    onAuthSuccess: async (uid, retryCallback, navigationCallback) => {
      const result = await getAdmin(uid);
      if (result instanceof Error) {
        Snackbar.show({
          text: result.message,
          duration: Snackbar.LENGTH_INDEFINITE,
          backgroundColor: COLORS.grey,
          action: {text: 'Retry', textColor: COLORS.red, onPress: retryCallback},
        });
      } else {
        setAdmin(result);
        navigationCallback();
      }
    },
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
