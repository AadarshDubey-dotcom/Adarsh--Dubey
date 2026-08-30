import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders the about section content', () => {
    render(<About />);

    expect(screen.getByText(/about me/i)).toBeTruthy();
    expect(screen.getByText(/frontend developer/i)).toBeTruthy();
  });
});
