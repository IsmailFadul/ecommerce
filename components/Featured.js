import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { createContext, useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weiht: normal;
  font-size: 1.5rem;
    @media screen and (min-width: 768px) {
    font-size: 3rem;
    }
`;
const Desc = styled.p`
  color: #aaa;
  fount-size: 0.8rem;
`;
const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.9fr 1.1fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  white={1}
                  outline={1}
                  href={"/prodcut/" + product._id}
                >
                  Read more
                </ButtonLink>
                <Button onClick={addFeaturedToCart} white>
                  Add to the cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img
              src={
                "https://ismail-next-e-commerce-admin.s3.amazonaws.com/1763040105528.png"
              }
            />
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
