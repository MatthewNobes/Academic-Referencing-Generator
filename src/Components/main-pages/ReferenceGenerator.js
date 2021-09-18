import '../../css/App.css';
import React from 'react';

import OptionsForm from './OptionsForm'


export default function Referencing() {
    return (
        <div>
            <h1>Reference Generator</h1>
            <p>Please select your Referencing style and detail the specifics of your sources.</p>
            <OptionsForm />
        </div> 
    )
    
}