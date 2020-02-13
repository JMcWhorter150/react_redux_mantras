import React from 'react';
import Input from './Input';

export default function List({mantras}) {
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