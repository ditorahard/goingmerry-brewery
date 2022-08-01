import { Box } from 'native-base';
import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export type LayoutProps = {};

export function Layout(props: LayoutProps) {
  return (
    <Box>
      <Box
        alignSelf="center"
        bg="primary.500"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}
      >
        This is a Box
      </Box>
    </Box>
  );
}

export default Layout;
