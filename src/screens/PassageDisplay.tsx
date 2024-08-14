// PassageDisplay.js
import React, { useEffect, useState } from 'react';

const PassageDisplay = ({ translation, passage }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch(`https://bible.helloao.org/api/bible/${translation}/${passage}`)
            .then(response => response.json())
            .then(data => setText(data.text))
            .catch(error => console.error('Error fetching passage:', error));
    }, [translation, passage]);

    return (
        <div>
            <h3>{passage}</h3>
            <p>{text}</p>
        </div>
    );
};

export default PassageDisplay;
