import React from 'react';
import { Button } from 'reactstrap';

const ButtonSimpson = ({ selectQuote }) => {
    return (
      <div>
        <Button color="success" onClick={selectQuote}>New quote</Button>
      </div>
    )
}

export default ButtonSimpson;