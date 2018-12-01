import React from 'react';

const DisplaySimpson = ({ descriptQuote }) => {
    return (
        <div>
            <img src={descriptQuote.image} alt="Simpson" />
            <ul>
                <li>Nom : {descriptQuote.character}</li>
                <li>Citation : {descriptQuote.quote}</li>
            </ul>
        </div>
    )
}

export default DisplaySimpson;