import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface CoinsProps {}

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coins: FunctionComponent<CoinsProps> = ({}) => {
  return <Title>Coin</Title>;
};

export default Coins;
