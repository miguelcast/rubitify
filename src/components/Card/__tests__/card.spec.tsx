import React from 'react';
import { render } from '@testing-library/react';

import Text from '../Text';
import Card from '../Card';

it('components/Card/Text', () => {
  const { getByText } = render(<Text>Hello world</Text>);
  expect(getByText('Hello world')).toBeInTheDocument();
});

it('components/Card/Card', () => {
  const { getByText } = render(<Card image="/images/logo.png" title="New Artist" subtitle="Sub Artist" />);
  expect(getByText('Sub Artist')).toBeInTheDocument();
});
