import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContentTitle from '../../components/Content/ContentTitle/ContentTitle';

test('renders ContentTitle component', () => {
  const { container } = render(<ContentTitle>Test Title</ContentTitle>);
  
  expect(container).toMatchSnapshot();
});
