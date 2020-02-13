import React from 'react';

export default function MantraList({mantras, handleSelect}) {
    return (
        <div>
            <h3>Select a mantra below by clicking on it:</h3>
            <ul>
                {mantras.map((item, i) => (
                <li key={i} onClick={() => {handleSelect(i)}}>
                    {item}
                </li>
                ))}
            </ul>
        </div>
    );
}