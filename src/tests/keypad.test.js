import React from 'react';
import {render} from '@testing-library/react'
import Keypad from '../component/keypad'

test('renders keypad without crashing', () => {
  render(<Keypad />);
});
