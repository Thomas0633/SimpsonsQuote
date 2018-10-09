import React, { Component } from 'react';

const DisplaySimpson = ({ descriptQuote }) => {
    return (
        <div>
            <img src={descriptQuote.image} alt="picture" />
            <ul>
                <li>Nom : {descriptQuote.character}</li>
                <li>Citation : {descriptQuote.quote}</li>
            </ul>
        </div>
    )
}

export default DisplaySimpson;