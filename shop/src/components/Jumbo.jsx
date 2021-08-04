import React from 'react';
import {Button, Jumbotron } from 'react-bootstrap';

function Jumbo(props) {
  return (
    <div>
      <Jumbotron className="background">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>    
    </div>
  );
}

export default Jumbo;