import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TopMenu from '../../components/Header/TopMenu'

test('renders TopMenu component', () => {
  const { container } = render(
    <Router>
      <TopMenu />
    </Router>
  );

  expect(container).toMatchSnapshot();
});
