import {Dimensions} from 'react-native';

const designSize = {
  width: 360,
  height: 760,
};

export const deviceWidth = Dimensions.get('screen').width;
export const deviceHeight = Dimensions.get('screen').height;

const heightRatio = deviceHeight / designSize.height;
const widthRatio = deviceWidth / designSize.width;

export const rsWidth = (w: number): number => w * widthRatio;

export const rsHeight = (h: number): number => h * heightRatio;

export const rsRadius = (r: number): number => {
  const ratio = Math.min(widthRatio, heightRatio);
  return r * ratio;
};

export const rsSize = (t: number): number => {
  const ratio = Math.min(widthRatio, heightRatio);
  return t * ratio;
};
