import React from 'react';
import Chance from 'chance';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import Static from '.';

describe('Testing Static template', () => {
  const chance = new Chance();
  const title = chance.sentence();
  const content = chance.sentence();

  test('Should display the title and content provided', () => {
    const { queryByText } = render(<Router><Static title={title} content={content} /></Router>);
    const customTitle = queryByText(title);
    const customContent = queryByText(content);
    expect(customTitle).not.toBeNull();
    expect(customContent).not.toBeNull();
    expect(customTitle).toBeInTheDocument();
    expect(customContent).toBeInTheDocument();
  });
});
