import {addEventListener} from '@react-native-community/netinfo';
import {ReactNode, useState} from 'react';
import {Snackbar} from 'react-native-paper';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import COLORS from '../../values/colors';

type props = {
  children: ReactNode;
};

const NetworkInfoWrapper = ({children}: props) => {
  const [isSnackbarShown, setIsSnackBarShown] = useState<boolean>(false);

  useEffect(() => {
    addEventListener(state => {
      !state.isConnected ? setIsSnackBarShown(true) : setIsSnackBarShown(false);
    });
  }, []);

  return (
    <>
      <Snackbar
        style={styles.snackbar}
        visible={isSnackbarShown}
        duration={2000000}
        onDismiss={() => setIsSnackBarShown(false)}>
        Not connected to internet !!
      </Snackbar>
      {children}
    </>
  );
};

export default NetworkInfoWrapper;

const styles = StyleSheet.create({
  snackbar: {backgroundColor: COLORS.red},
});
