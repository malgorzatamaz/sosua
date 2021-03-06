import styled from "styled-components/native";
import type { SectionProps } from "./types";

export const PageSection = styled.View<SectionProps>`
  padding: ${(props) =>
    props.zeroPadding
      ? "0 0"
      : props.padding
      ? `${props.padding[0]}px ${props.padding[1]}px ${props.padding[2]}px ${props.padding[3]}px`
      : `${props.theme.pageSection.desktopSpacing} 0`};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.pageSection.backgroundColor};
  flex-direction: column;
`;
