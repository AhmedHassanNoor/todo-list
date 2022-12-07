import styled from '../styled';
import {
  BorderRadiusProps,
  DisplayProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MinWidthProps,
  SpaceProps,
  WidthProps,
  borderRadius,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  compose,
  position,
  PositionProps,
} from 'styled-system';
import { css } from '@emotion/react';

interface ButtonProps {
  color?: string;
  type?: 'button' | 'submit';
}

type Props = ButtonProps &
  SpaceProps &
  FontSizeProps &
  WidthProps &
  FontWeightProps &
  LineHeightProps &
  BorderRadiusProps &
  MinWidthProps &
  DisplayProps &
  PositionProps;

export const Button = styled('button')<Props>`
  ${() => {
    return css`
      transition: all 0.5s ease;
      &:hover {
        transition: all 0.3s ease;
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `;
  }}
  ${compose(space, fontSize, fontWeight, lineHeight, borderRadius, display, position)}
`;
