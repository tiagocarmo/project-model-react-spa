import React from 'react';
import Chance from 'chance';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Home from '.';

describe('Testing Home template', () => {
  const chance = new Chance();
  const children = chance.sentence();

  test('Should display the children provided', () => {
    const { queryByText } = render(<Router><Home children={children} /></Router>);
    const customChildren = queryByText(children);
    expect(customChildren).not.toBeNull();
    expect(customChildren).toBeInTheDocument();
  });
});
