import React, { Component } from 'react';

const ButtonSimpson = ({ selectQuote }) => {
    return (
        <div>
            <button onClick={selectQuote}>New quote</button>
        </div>
    )
}

export default ButtonSimpson;