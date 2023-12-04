import PropTypes from 'prop-types'
import {
  StyledOrderedProductWrapper,
  StyledLeftBlock,
  StyledInfoBlock,
  StyledProductImageBox,
  StyledProductText,
  StyledProductTextSelected,
  StyledRightBlock,
  StyledPriceText,
} from './OrderedProductStyles'

const OrderedProduct = ({ name, price, color, image }) => {
  return (
    <StyledOrderedProductWrapper>
      <StyledLeftBlock>
        <StyledProductImageBox>
          <img src={image} alt={name} />
        </StyledProductImageBox>
        <StyledInfoBlock>
          <StyledProductText>{name}</StyledProductText>
          <StyledProductText>
            Color :{' '}
            <StyledProductTextSelected>{`${color}`}</StyledProductTextSelected>
          </StyledProductText>
        </StyledInfoBlock>
      </StyledLeftBlock>
      <StyledRightBlock>
        <StyledPriceText>{`$${price}`}</StyledPriceText>
      </StyledRightBlock>
    </StyledOrderedProductWrapper>
  )
}

OrderedProduct.defaultProps = {
  name: 'Product name',
  color: 'Product color',
  price: 0,
}

OrderedProduct.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.number,
}
export default OrderedProduct
