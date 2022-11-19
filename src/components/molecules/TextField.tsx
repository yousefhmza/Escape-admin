import {StyleSheet, View, TextInput, TextInputProps, Text} from 'react-native';
import {rsHeight, rsRadius, rsSize, rsWidth} from '../../utils/responsive';
import COLORS from '../../values/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ErrorMessage} from 'formik';
import {VerticalSpace} from '../atoms/Spaces';

type InputProps = {
  icon: string;
  name?: string;
  error?: boolean;
};

const TextField = (props: InputProps & TextInputProps) => {
  return (
    <>
      <View style={styles.textInputContainer}>
        <Icon name={props.icon} color={COLORS.white} size={rsSize(20)} />
        <TextInput style={styles.textInput} cursorColor={COLORS.red} placeholderTextColor={COLORS.grey} {...props} />
      </View>
      <VerticalSpace height={rsHeight(4)} />
      {props.name && props.error && (
        <Text style={styles.errorText}>
          <ErrorMessage name={props.name} />
        </Text>
      )}
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: rsHeight(48),
    borderWidth: rsWidth(1),
    borderRadius: rsRadius(6),
    borderColor: COLORS.red,
    paddingHorizontal: rsWidth(8),
  },
  textInput: {
    color: COLORS.white,
    marginStart: rsWidth(4),
    width: '100%',
  },
  errorText: {
    color: COLORS.red,
    fontSize: rsSize(12),
    alignSelf: 'flex-start',
  },
});
