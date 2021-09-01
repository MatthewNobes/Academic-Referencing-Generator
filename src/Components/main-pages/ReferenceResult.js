import '../../css/App.css';
import React from 'react';

const completeReference = () => {
    return (
        <p>Reference</p>
    )
}

const completeCitation = () => {
    return (
        <p>Citation</p>
    )
}

export default function referenceResult() {
    return (
        <div>
            <h2>Reference</h2>
            <completeReference />
            <h2>In-text Citation</h2>
            <completeCitation />
        </div> 
    )  
}