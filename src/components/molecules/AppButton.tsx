import React from 'react';
import {StyleProp, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {rsHeight, rsRadius, rsSize} from '../../utils/responsive';
import COLORS from '../../values/colors';

type TProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const AppButton = ({onPress, title, style, disabled}: TProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.red,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: rsHeight(40),
    borderRadius: rsRadius(6),
  },
  title: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: rsSize(16),
  },
});
