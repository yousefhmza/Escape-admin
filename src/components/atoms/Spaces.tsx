import React from "react";
import { View } from "react-native";

export const VerticalSpace = ({ height }: { height: number }) => {
  return <View style={{ height }} />;
};

export const HorizontalSpace = ({ width }: { width: number }) => {
  return <View style={{ width }} />;
};
