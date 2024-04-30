import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.theme.spacings.large_16};
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacings.xx_large_32};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.theme.spacings.large_16};
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
