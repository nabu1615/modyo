import React from "react";
import Body from "../../components/Body/Body";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import about from "../../assets/images/about.jpg";

import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="grid">
        <Heading className="about__title" level={2}> About Us</Heading>
        <img className="about__image" src={about} />
        <div className="about__info">
            <Heading className="about__subtitle" level={3}> Create interactive prototypes</Heading>
            <Body className="about__body">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</Body>
            <Button className="about__btn">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
