import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 12px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemName = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
  display: flex;
  width: 23%;
`;

export const CheckoutItemPrice = styled.span`
  width: 23%;
`;

export const CheckoutItemValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemArrow = styled.div`
  cursor: pointer;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
