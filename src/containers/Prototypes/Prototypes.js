import React from "react";
import Body from "../../components/Body/Body";
import Heading from "../../components/Heading/Heading";
import List from "../../components/List/List";
import CardAuthor from "../../components/CardAuthor/CardAuthor";
import prototype from "../../assets/images/prototype.png";

import "./styles.scss";

const Prototypes = () => {
  return (
    <section className="prototypes" id="prototypes">
      <div className="grid">
        <img className="prototypes__image" src={prototype} />
        <div className="prototypes__info">
          <Heading level={2}>Create interactive prototypes</Heading>
          <Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </Body>
          <List
            items={["Adipisci excepturi aliquam", "Deleniti labore reiciendis"]}
          />
          <CardAuthor
            name="Amalia G."
            role="Co-Founder, XYZ Inc."
            quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?"
            className="prototypes__card"
          />
        </div>
      </div>
    </section>
  );
};

export default Prototypes;
