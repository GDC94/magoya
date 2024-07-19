import styled from "@emotion/styled";

import { FlexStartConfig } from "@/styles/themeParts/flex";
import { QUERIES } from "@/styles";

export const MiddleLeft = styled.div`
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.dark[100]};
`;

export const MiddleRight = styled.div`
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.size["1"]};
`;

export const LeftFooter = styled.div`
  padding: 1.3rem;
  background-color: ${({ theme }) => theme.colors.dark[100]};
`;

export const HeaderTop = styled.div`
  ${FlexStartConfig}
  align-items: center;
  margin-bottom: ${({ theme }) => theme.size["0.75"]};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.size["1.75"]};
  letter-spacing: -1px;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.size["1"]};
  padding-top: ${({ theme }) => theme.size["0.5"]};
  padding-bottom: ${({ theme }) => theme.size["0.5"]};
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dark[100]};
`;

export const TechTable = styled.div`
  height: 100px;
  ${FlexStartConfig}
`;

export const ItemsLeft = styled.div`
  height: 100%;
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.colors.dark[100]};
  ${FlexStartConfig}
  flex-direction: column;
`;

export const ItemsRight = styled.div`
  height: 100%;
  width: 50%;
  ${FlexStartConfig}
  flex-direction: column;
  padding-left: ${({ theme }) => theme.size["0.5"]};
`;

export const ItemsBack = styled.div`
  height: auto;
  width: 50%;
  gap: 10px;
  ${FlexStartConfig}
  padding-left: ${({ theme }) => theme.size["0.5"]};

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 0px;
    padding-left: 0px;
  }
`;

export const Item = styled.span`
  font-size: ${({ theme }) => theme.size["0.875"]};
  font-weight: 600;
`;
