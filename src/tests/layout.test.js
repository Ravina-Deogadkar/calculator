import React from 'react';
import {render} from '@testing-library/react'
import Calculator from '../component/layout'
// import 'jest'
// import '@testing-library/react/cleanup-after-each';

test('renders layout without crashing', () => {
  const {layout} = render(<Calculator />);
});
