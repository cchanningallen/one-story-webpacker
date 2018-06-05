import * as muiColors from '@material-ui/core/colors';
import { randomItem } from 'app/util/array';

const colorVariantKeys = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'A100',
  'A200',
  'A400',
  'A700',
];

// 'common' breaks things b/c it doesn't have values for all keys
const { common, ...colors } = muiColors;
const colorKeys = Object.keys(colors);

export const randomPalette = () => {
  const color = randomItem(colorKeys);
  const palette = colors[color];

  return { color, palette };
};
