import React from "react";
import Body from "../../components/Body/Body";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import hero from "../../assets/images/hero.png";

import "./style.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="grid">
        <div className="hero__info">
          <Heading>Grow Your Business Faster</Heading>
          <Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </Body>
          <Button className="hero__btn">Get Started</Button>
        </div>
        <div className="hero__image">
          <img src={hero} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
