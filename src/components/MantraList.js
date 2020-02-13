import React from 'react';

export default function MantraList({mantras, handleSelect}) {
    return (
        <ul>
            {mantras.map((item, i) => (
            <li key={i} onClick={() => {handleSelect(i)}}>
                {item}
            </li>
            ))}
        </ul>
    );
}