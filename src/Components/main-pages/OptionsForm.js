import '../../css/App.css';
import React from 'react';
import ReactDOM from 'react-dom';

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

const SourceDetails = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Authors last name" variant="outlined" />
            <TextField id="outlined-basic" label="Authors initials" variant="outlined" />
            <TextField
                id="date"
                label="Date of publication"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField id="outlined-basic" label="Title of article " variant="outlined" />
            <TextField id="outlined-basic" label="Title of website" variant="outlined" />
            <TextField id="outlined-basic" label="URL" variant="outlined" />
        </div>
    )
}

/*Source needs to have for webpage/website
    Author (last name)-support multiple
    Initials-support multiple
    Date of publication 
        Year
        Month 
        Day
    Title of article 
    Title of website
    URL 
*/

export default function OptionsForm() {
    return (
        <form className="ReferenceGenerator-Form">
            <div className="ReferenceGenerator-OptionsContainer">
                <h3>Options</h3>
                <RefStyle />
                <SourceType />
            </div>
            <div className="ReferenceGenerator-OptionsContainer">
                <h3>Source Details</h3>
                <SourceDetails />
            </div>
        </form>
    )
    
}