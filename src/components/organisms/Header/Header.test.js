import React from 'react';
import Chance from 'chance';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Header from '.';

describe('Testing Header organism', () => {
  const chance = new Chance();
  const title = chance.sentence();

  test('Should display the default value, when the title is not informed', () => {
    const { queryByText } = render(<Router><Header /></Router>);
    const defaultTitle = queryByText('Report sobre a COVID-19 no Brasil');
    expect(defaultTitle).not.toBeNull();
    expect(defaultTitle).toBeInTheDocument();
  });

  test('Should display the title provided', () => {
    const { queryByText } = render(<Router><Header title={title} /></Router>);
    const customTitle = queryByText(title);
    expect(customTitle).not.toBeNull();
    expect(customTitle).toBeInTheDocument();
  });
});
