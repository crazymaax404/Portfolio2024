import styled, { css, type DefaultTheme } from "styled-components";

import { type TypographyProps } from "./typography.interfaces";

type Theme = TypographyProps & { theme: DefaultTheme };

export const Paragraph = styled.p<Theme>`
  margin: 0;
  color: ${(props) => props.color} !important;

  ${(props) => {
    if (props.maxLines)
      return css`
        word-break: break-word;

        @supports (-webkit-line-clamp: ${props.maxLines}) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: ${props.maxLines};
          -webkit-box-orient: vertical;
        }
      `;
  }}

  ${(props) => {
    const { variant, theme } = props;
    switch (variant) {
      //* *** BAI *** */

      case "baiRegularBold":
        return css`
          font-family: ${theme.typographies.bai.regularBold.family};
          font-size: ${theme.typographies.bai.regularBold.size};
          font-weight: ${theme.typographies.bai.regularBold.weight};
          color: ${theme.colors.text};
        `;

      case "baiSubTitle":
        return css`
          font-family: ${theme.typographies.bai.subTitle.family};
          font-size: ${theme.typographies.bai.subTitle.size};
          font-weight: ${theme.typographies.bai.subTitle.weight};
          color: ${theme.colors.text};
        `;

      case "baiTitle":
        return css`
          font-family: ${theme.typographies.bai.title.family};
          font-size: ${theme.typographies.bai.title.size};
          font-weight: ${theme.typographies.bai.title.weight};
          color: ${theme.colors.text};
        `;

      case "baiExtraLarge":
        return css`
          font-family: ${theme.typographies.bai.extraLarge.family};
          font-size: ${theme.typographies.bai.extraLarge.size};
          font-weight: ${theme.typographies.bai.extraLarge.weight};
          color: ${theme.colors.text};
        `;

      case "baiHuge":
        return css`
          font-family: ${theme.typographies.bai.huge.family};
          font-size: ${theme.typographies.bai.huge.size};
          font-weight: ${theme.typographies.bai.huge.weight};
          color: ${theme.colors.text};
        `;

      //* *** UBUNTU *** */

      case "ubuntuRegular":
        return css`
          font-family: ${theme.typographies.ubuntu.regular.family};
          font-size: ${theme.typographies.ubuntu.regular.size};
          font-weight: ${theme.typographies.ubuntu.regular.weight};
          color: ${theme.colors.text};
        `;

      case "ubuntuRegularBold":
        return css`
          font-family: ${theme.typographies.ubuntu.regularBold.family};
          font-size: ${theme.typographies.ubuntu.regularBold.size};
          font-weight: ${theme.typographies.ubuntu.regularBold.weight};
          color: ${theme.colors.text};
        `;

      case "ubuntuSubTitle":
        return css`
          font-family: ${theme.typographies.ubuntu.subTitle.family};
          font-size: ${theme.typographies.ubuntu.subTitle.size};
          font-weight: ${theme.typographies.ubuntu.subTitle.weight};
          color: ${theme.colors.text};
        `;

      case "ubuntuTitle":
        return css`
          font-family: ${theme.typographies.ubuntu.title.family};
          font-size: ${theme.typographies.ubuntu.title.size};
          font-weight: ${theme.typographies.ubuntu.title.weight};
          color: ${theme.colors.text};
        `;

      case "ubuntuExtraLarge":
        return css`
          font-family: ${theme.typographies.ubuntu.extraLarge.family};
          font-size: ${theme.typographies.ubuntu.extraLarge.size};
          font-weight: ${theme.typographies.ubuntu.extraLarge.weight};
          color: ${theme.colors.text};
        `;

      case "ubuntuHuge":
        return css`
          font-family: ${theme.typographies.ubuntu.huge.family};
          font-size: ${theme.typographies.ubuntu.huge.size};
          font-weight: ${theme.typographies.ubuntu.huge.weight};
          color: ${theme.colors.text};
        `;

      default:
        return css`
          font-family: ${theme.typographies.bai.regular.family};
          font-size: ${theme.typographies.bai.regular.size};
          font-weight: ${theme.typographies.bai.regular.weight};
          color: ${theme.colors.text};
        `;
    }
  }}
`;
