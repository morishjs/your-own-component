import styled from 'styled-components';
import { space, layout, color, flexbox, SpaceProps, LayoutProps, ColorProps, FlexboxProps } from 'styled-system';
import React from 'react';

const StyledBox = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

export type BoxProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps;

const Box: FCC<BoxProps> = (props: any) => {
  return <StyledBox {...props} data-testid="box-comp" />;
};

export default Box;
