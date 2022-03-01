import * as React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 16px;
`;

const Title = styled.h1`
  color: #003566;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;

  &:after {
    width: 129px;
    height: 13px;
    position: absolute;
    bottom: -5px;
    left: 0;
    content: "";
    background-color: #ffd700;
    z-index: -1;
  }
`;

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Section;
