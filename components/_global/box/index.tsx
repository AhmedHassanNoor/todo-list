import { ElementType } from "react";
import styled from "../styled";
import {
  LayoutProps,
  BorderProps,
  ShadowProps,
  TypographyProps,
  FlexProps,
  FlexGrowProps,
  FlexBasisProps,
  FlexShrinkProps,
  AlignSelfProps,
  OrderProps,
  ColorProps,
  PositionProps,
  SpaceProps,
  compose,
  space,
  layout,
  border,
  shadow,
  typography,
  color,
  position,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  flexbox,
  FlexboxProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  LayoutProps &
  BorderProps &
  ShadowProps &
  TypographyProps &
  FlexElementProps &
  ColorProps &
  PositionProps & { color?: string; as?: ElementType | string };

type StyledFlexProps = BoxProps & FlexboxProps;

const flexElement = compose(flex, flexGrow, flexShrink, flexBasis, alignSelf, order);

const styledBox = compose(space, layout, border, shadow, typography, flexElement, color, position);

export const Box = styled("div")<BoxProps>(
  {
    boxSizing: "border-box",
  },
  styledBox
);

export const Flex = styled(Box)<StyledFlexProps>(
  {
    display: "flex",
  },
  flexbox
);

// For elements inside Flexboxes
type FlexElementProps = FlexProps & FlexGrowProps & FlexShrinkProps & FlexBasisProps & AlignSelfProps & OrderProps;
