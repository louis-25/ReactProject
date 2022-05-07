import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

type CoinsProps = {};

const Coin: FunctionComponent<CoinsProps> = ({}) => {
  const { coinId } = useParams();

  return <div>Coin {coinId}</div>;
};

export default Coin;
