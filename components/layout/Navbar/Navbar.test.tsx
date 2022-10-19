import { fireEvent, render, screen, waitFor } from 'lib/test-utils';
import Navbar from './Navbar';
import singletonRouter from 'next/router';

jest.mock('next/router', () => require('next-router-mock'));

describe(Navbar, () => {
  it('should render search input', () => {
    render(<Navbar />);

    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toBeVisible();
  });

  it('should render search button', () => {
    render(<Navbar />);

    const searchButton = screen.getByRole('button');

    expect(searchButton).toBeVisible();
    expect(searchButton).not.toBeDisabled();
  });

  it('should render shopping cart image', () => {
    render(<Navbar />);

    const shoppingCartImage = screen.getByAltText('shopping cart');

    expect(shoppingCartImage).toBeVisible();
  });

  it('should redirect to search page after search', async () => {
    render(<Navbar />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: 'phone' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(singletonRouter).toMatchObject({ asPath: `/search?q=phone` });
    });
  });
});
