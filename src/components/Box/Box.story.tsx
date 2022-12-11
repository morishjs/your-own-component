import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import Box, { BoxProps } from './Box';

export default {
  title: 'Box',
  component: Box,
} as Meta<BoxProps>;

export const Default: FC = () => {
  return <Box>hello world</Box>;
};
