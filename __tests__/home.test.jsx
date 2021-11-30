import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { Htag, Button, Rating } from '../components';

describe('Home', () => {
  it('renders a component Button', () => {
    render(<Home />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
