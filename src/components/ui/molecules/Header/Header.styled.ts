import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.size["0.75"]};
  padding-left: ${({ theme }) => theme.size["2"]};
  background-color: ${({ theme }) => theme.colors.white[100]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark[100]};
`;
