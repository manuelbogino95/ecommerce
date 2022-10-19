import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  max-width: 500px;

  @media ${device.sm} {
    width: 50%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  justify-content: center;

  @media ${device.sm} {
    flex-direction: row;
  }
`;

export const ProductDetailsWrapper = styled.div`
  @media ${device.sm} {
    max-width: 50%;
  }
`;

export const InputContainer = styled.div`
  margin-right: 8px;
`;
