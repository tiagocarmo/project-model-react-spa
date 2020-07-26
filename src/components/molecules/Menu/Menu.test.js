import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Menu from '.';

describe('Testing Menu molecule', () => {
  test('Should render home link correctly', () => {
    const { queryByText } = render(<Router><Menu /></Router>);
    const link = queryByText('Home');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });

  test('Should render about link correctly', () => {
    const { queryByText } = render(<Router><Menu /></Router>);
    const link = queryByText('Sobre');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });

  test('Should render privacy-policy link correctly', () => {
    const { queryByText } = render(<Router><Menu /></Router>);
    const link = queryByText('Política Privacidade');
    expect(link).not.toBeNull();
    expect(link).toBeInTheDocument();
  });
});
