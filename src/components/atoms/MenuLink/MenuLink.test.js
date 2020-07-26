import React from 'react';
import Chance from 'chance';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import MenuLink from '.';

describe('Testing MenuLink atom', () => {
  const chance = new Chance();
  const text = chance.word();
  const url = chance.url();

  test('Should render text correctly', () => {
    const { queryByText } = render(<Router><MenuLink url={url} text={text} /></Router>);
    const link = queryByText(text);
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });
});
