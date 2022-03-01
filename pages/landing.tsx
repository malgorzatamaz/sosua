import * as React from "react";
import { Image } from "react-native";
import { ButtonCta } from "../src/components/Buttons";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Section from "../src/components/Section";

function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Section title="Partnerzy wspierający akcję">
        Jesli dysponujsz lokalem, pokojem, miejscem które możesz nieodpłatnie
        udostępnić ofiarom wojny w Ukrainie, zarejestruj się jako wolontariusz,
        wypełniając kwestionariusz dotyczący Twojego lokalu.
        <br />
        <br />
        Nasza aplikacja pomoże automatycznie dopasować zarejestrowanych
        potrzebujących na podstawie udostępnionych informacji.
        <ButtonCta anchor="Zarejestruj się" />
      </Section>
    </>
  );
}

export default Landing;
