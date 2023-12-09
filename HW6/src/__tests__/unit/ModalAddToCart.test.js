import React from 'react';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ModalAddToCart from '../../components/Modal/ModalAddToCart';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('ModalAddToCart Component', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('renders modal when openModalCart is true', () => {
    useSelector.mockReturnValueOnce(true);
    useSelector.mockReturnValueOnce({
      name: 'Product Name',
      price: 10,
      img: 'product-image.jpg',
    });

    useSelector.mockReturnValueOnce({ article: 'mockedArticle' });

    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(<ModalAddToCart />);

    expect(getByText('Add this product to your cart?')).toBeInTheDocument();
    expect(getByText('Product Name - $10')).toBeInTheDocument();
  });
});
