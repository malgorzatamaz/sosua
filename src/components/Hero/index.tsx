import * as React from "react";
import { ImageBackground, Text } from "react-native";
import { ButtonCta } from "../Buttons";
import heroImage from "../../../public/hero.png";
import styled from "styled-components";

const SubTitle = styled.h2``;

const Hero = () => {
  return (
    <section>
      <ImageBackground source={heroImage}>
        <h1>Pomagamy znaleźć schronienie ofiarom wojny w Ukrainie</h1>

        <SubTitle>
          <Text>
            Pomagamy uchodźcom znaleźć bezpłatne schronienie oferowane przez
            osoby i instytucje chcące nieść pomoc. Nasz portal ma za zadanie
            automatycznie połączyć potencjalne lokum z szukającym schronienia na
            podstawie określonych potrzeb
          </Text>
        </SubTitle>

        <ButtonCta anchor="Szukam schronienia" />
        <ButtonCta anchor="Oferuję pomoc" />
      </ImageBackground>
    </section>
  );
};

export default Hero;
