import styled from "../styled";
import {
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  TextAlignProps,
  LineHeightProps,
  LetterSpacingProps,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  display,
  DisplayProps,
  opacity,
  OpacityProps,
  compose,
} from "styled-system";
import { Box, BoxProps } from "../box";
import theme from "../../../themes";

type TextProps = BoxProps &
  FontFamilyProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  TextAlignProps &
  LineHeightProps &
  LetterSpacingProps &
  DisplayProps &
  OpacityProps;

export const Text = styled(Box)<TextProps>(
  compose(fontFamily, fontWeight, fontSize, fontStyle, textAlign, lineHeight, letterSpacing, opacity, display)
);

Text.defaultProps = {
  fontFamily: theme.fonts.body,
};
