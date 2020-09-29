import React from 'react';
import { render } from '@testing-library/react';

import App from '../app';

describe('<App />', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(<App data-testid="App" />);
    expect(getByTestId('App')).toBeInTheDocument();
  });
});
