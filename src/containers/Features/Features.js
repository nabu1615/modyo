import React from "react";
import Heading from "components/Heading/Heading";
import Card from "../../components/Card/Card";
import { features } from "./featuresMock";
import './styles.scss';

const Features = (props) => {
  return (
    <section className="features">
      <div className="grid">
        <Heading level={2} className="features__title">Features</Heading>
        <div className="features__wrapper">
          {features.map(({ icon, title, bodyText, ButtonText }, index) => (
            <Card
              key={index}
              icon={icon}
              title={title}
              bodyText={bodyText}
              buttonText={ButtonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
