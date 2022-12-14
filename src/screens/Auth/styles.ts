import {StyleSheet} from 'react-native';
import {rsWidth} from '../../utils/responsive';
import COLORS from '../../values/colors';

export const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: rsWidth(16),
    backgroundColor: COLORS.background,
  },
  image: {
    width: rsWidth(250),
    height: rsWidth(250),
  },
  button: {
    width: '100%',
    paddingHorizontal: rsWidth(16),
  },
});
