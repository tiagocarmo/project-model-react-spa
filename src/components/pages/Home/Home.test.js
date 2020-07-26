import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Home from '.';

describe('Testing Home page', () => {
  const children = /Abaixo segue um exemplo/;
  test('Should display the children and content provided', () => {
    const { queryByText } = render(<Router><Home /></Router>);
    const customChildren = queryByText(children);
    expect(customChildren).not.toBeNull();
    expect(customChildren).toBeInTheDocument();
  });
});
