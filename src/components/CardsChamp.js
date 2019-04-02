import React from "react";
import ChampPr from "./ChampPr";
import { Row } from "reactstrap";
import CardChamp from "./CardChamp";

const ListCardChamp = () => (
  <Row>
    {CardChamp.map(CardChamp => (
      <ChampPr key={CardChamp} {...CardChamp} />
    ))}
  </Row>
);

export default ListCardChamp;
