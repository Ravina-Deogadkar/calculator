import React from 'react';
import {render} from '@testing-library/react'
import Header from '../component/header'

test('renders Header without crashing', () => {
  render(<Header />);
});
