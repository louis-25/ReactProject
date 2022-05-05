import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background: tomato;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background: royalblue;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>hello</Text>
      </BoxOne>
      <BoxTwo></BoxTwo>
    </Father>
  );
}

export default App;
