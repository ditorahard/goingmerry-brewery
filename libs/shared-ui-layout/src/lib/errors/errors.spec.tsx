import React from 'react';
import { render } from '@testing-library/react-native';

import Errors from './errors';

describe('Errors', () => {
  it('should render successfully', () => {
    const { container } = render(<Errors />);
    expect(container).toBeTruthy();
  });
});
