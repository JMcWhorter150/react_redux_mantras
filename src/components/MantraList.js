import React from 'react';

export default function MantraList({mantras}) {
    return (
        <ul>
            {mantras.map((item, i) => (
            <li key={i}>
                {item}
            </li>
            ))}
        </ul>
    );
}