import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import NotFound from '.';

describe('Testing NotFound page', () => {
  const title = 'Pagina não encontrada';
  test('Should display the title and content provided', () => {
    const { queryByText } = render(<Router><NotFound /></Router>);
    const customTitle = queryByText(title);
    expect(customTitle).not.toBeNull();
    expect(customTitle).toBeInTheDocument();
  });
});
