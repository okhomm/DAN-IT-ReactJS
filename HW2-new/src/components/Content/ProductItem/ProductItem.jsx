import styled from "styled-components";

const StyledProductItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 70px;
  padding-bottom: 100px;
`

const StyledProductCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    max-height: 370px;

    border-radius: 12px;
  }
`

const ProductItem = ({img, name, price}) => {
  return (
    <StyledProductItem>
      <StyledProductCart>
        <img src={img} alt={name} />
        <h6>{name}</h6>
        <button>{price}</button>
      </StyledProductCart>
    </StyledProductItem>
  )
};

export default ProductItem;