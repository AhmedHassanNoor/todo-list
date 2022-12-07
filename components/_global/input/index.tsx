import { css } from '@emotion/react';
import styled from '../styled';
import theme from '../../../themes';
import {
  BackgroundProps,
  BorderRadiusProps,
  DisplayProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  MinWidthProps,
  SpaceProps,
  background,
  borderRadius,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  minWidth,
  space,
  width,
  compose,
} from 'styled-system';

interface InputProps {
  invalid?: boolean;
  reserveErrorSpace?: boolean;
}

type Props = InputProps &
  SpaceProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  BorderRadiusProps &
  BackgroundProps &
  MinWidthProps &
  DisplayProps;

export const Input = styled.input<Props>`
  ${({ invalid = false, theme: Theme }) => {
    return css`
      outline: none;
      appearance: none;
      display: block;
      width: 100%;
      font-family: ${theme.fonts.body};
      font-size: ${theme.fontSizes[2]};
      color: inherit;
      background-color: transparent;
      border-width: 2px;
      border-style: solid;
      border-color: ${theme.colors.lime};
      padding: ${theme.space[2]}px 12px;
      margin: 0;

      ${invalid
        ? css`
            border-color: ${theme.colors.accent};
          `
        : ''}

      &:active,
      &:focus {
        border-color: ${theme.colors.lightGrey};
      }

      ::placeholder {
        color: ${theme.colors.mediumGrey};
      }
      ::-ms-clear {
        display: none;
      }
    `;
  }}
  ${compose(space, fontSize, width, fontWeight, lineHeight, background, borderRadius, minWidth, display)}
`;
