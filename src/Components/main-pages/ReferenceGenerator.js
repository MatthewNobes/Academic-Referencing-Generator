import '../../css/App.css';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SourceType = () => {
    const options = ['Website', 'Journal Article', 'Book', 'Reports', 'Newspaper', 'Magazine', 'Legal & Government', 'Conference Proceedings', 'Dictionary and Encyclopedia entries', 'Bloomberg Terminals', 'Mobil Apps', 'Data Sets', 'Software', 'Social Media']
    return (
        <Autocomplete
          options={options}
          className="ReferenceGenerator-ComboBox"
          renderInput={(params) =>
            <TextField {...params} label="Source Type" variant="outlined" />}
        />
    );
}

const RefStyle = () => {
    const options = ['APA 7th', 'Chicago', 'OSCOLA', 'Vancouver']
    return (
        <Autocomplete
          options={options}
          className="ReferenceGenerator-ComboBox"
          renderInput={(params) =>
            <TextField {...params} label="Referencing Style" variant="outlined" />}
        />
    );
}

export default function Referencing() {
    return (
        <div>
            <h1>Reference Generator</h1>
            <p>Please select your Referencing style and detail the specifics of your sources.</p>
            <div className="ReferenceGenerator-OptionsContainer">
                <h3>Options</h3>
                <RefStyle />
                <SourceType />
            </div>
            <div className="ReferenceGenerator-OptionsContainer">
                <h3>Source Details</h3>
            </div>
        </div> 
    )
    
}