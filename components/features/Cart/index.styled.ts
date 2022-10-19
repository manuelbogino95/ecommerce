import styled from 'styled-components';

export const CartContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  border: 1px #6366f1 solid;
  border-radius: 8px;
  overflow: hidden;
`;

export const OrderContainer = styled.div`
  border-radius: 8px;
  min-height: 100%;
  max-width: 1200px;
  overflow: hidden;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  min-height: 170px;
  min-width: 170px;
`;

export const Total = styled.p`
  font-size: 28px;
  text-align: right;
`;

export const ProductName = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const PurchaseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
