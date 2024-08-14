// ReadingPlan.js
import React from 'react';

const ReadingPlan = ({ day, passage }) => {
    return (
        <div>
            <h2>Day: {day}</h2>
            <p>Reading: {passage}</p>
        </div>
    );
};

export default ReadingPlan;
