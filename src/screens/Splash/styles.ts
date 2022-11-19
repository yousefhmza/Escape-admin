import {StyleSheet} from 'react-native';
import {rsWidth} from '../../utils/responsive';
import COLORS from '../../values/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  image: {
    width: rsWidth(250),
    height: rsWidth(250),
  },
});
