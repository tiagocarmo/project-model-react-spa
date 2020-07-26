import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import PrivacyPolicy from '.';

describe('Testing PrivacyPolicy page', () => {
  const title = 'Política Privacidade';
  test('Should display the title and content provided', () => {
    const { queryAllByText } = render(<Router><PrivacyPolicy /></Router>);
    const customTitle = queryAllByText(title);
    expect(customTitle).not.toBeNull();
    expect(customTitle).toHaveLength(2);
  });
});
