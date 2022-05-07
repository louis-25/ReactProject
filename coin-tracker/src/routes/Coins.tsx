import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CoinsProps {}

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    transition: color 0.2s ease-in;
    padding: 20px;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const coins = [
  {
    id: "Bitcoin",
    name: "Bitcoin",
    symbol: "bitcoin",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "Ripple",
    name: "Ripple",
    symbol: "ripple",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "Dosy",
    name: "Dosy",
    symbol: "dosy",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
];

const Coins: FunctionComponent<CoinsProps> = ({}) => {
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
};

export default Coins;
