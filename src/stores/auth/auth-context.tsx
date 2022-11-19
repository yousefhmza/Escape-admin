import {createContext, ReactNode, useState} from 'react';
import {TAdmin} from '../../utils/types';

export type TAuthValues = {
  admin: TAdmin | null;
  setAdmin: (admin: TAdmin | null) => void;
};

const initialValues: TAuthValues = {admin: null, setAdmin: () => {}};

export const AuthContext = createContext(initialValues);

type Tprops = {children: ReactNode};

const AuthContextProvider = ({children}: Tprops) => {
  const [admin, setAdmin] = useState<TAdmin | null>(null);

  const values: TAuthValues = {admin: admin, setAdmin: admin => setAdmin(admin)};

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
