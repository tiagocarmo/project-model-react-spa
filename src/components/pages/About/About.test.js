import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import About from '.';

describe('Testing About page', () => {
  const title = 'Sobre';
  test('Should display the title and content provided', () => {
    const { queryAllByText } = render(<Router><About /></Router>);
    const customTitle = queryAllByText(title);
    expect(customTitle).not.toBeNull();
    expect(customTitle).toHaveLength(2);
  });
});
