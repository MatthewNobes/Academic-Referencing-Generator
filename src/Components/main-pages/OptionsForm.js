import '../../css/App.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';

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
          className="ReferenceGenerator-Element"
          renderInput={(params) =>
            <TextField {...params} label="Referencing Style" variant="outlined" />}
        />
        
    );
}

const SourceDetails = () => {
    return (
        <div>
            <TextField id="outlined-basic" className="ReferenceGenerator-Element" label="Authors last name" variant="outlined" />
            <TextField id="outlined-basic" className="ReferenceGenerator-Element" label="Authors initials" variant="outlined" />
            <TextField
                className="ReferenceGenerator-Element"
                id="date"
                label="Date of publication"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField id="outlined-basic" className="ReferenceGenerator-Element" label="Title of article " variant="outlined" />
            <TextField id="outlined-basic" className="ReferenceGenerator-Element" label="Title of website" variant="outlined" />
            <TextField id="outlined-basic" className="ReferenceGenerator-Element" label="URL" variant="outlined" />
        </div>
    )
}

const NewStyleForm = () => {

    const [citation, appendCitation] = useState('')

    const [inTextCitation, appendinTextCitation] = useState('');

    const formik = useFormik({
        initialValues: {
            authorLastName: '',
            authorFirstInitial: '',
            date: '',
            articleTitle: '',
            websiteName: '',
            sourceUrl: ''
        },
        onSubmit: (values) => {
            debugger;
            const authorInfo = values.authorLastName + ' ' + values.authorFirstInitial + '. '
            const date = values.date
            const siteInfo = values.articleTitle + ' ' + values.websiteName + '. '
            const refer = authorInfo + ' ' + date + ' ' + siteInfo + values.sourceUrl;
            appendCitation(refer);
        }
    });

    return (
        <div className="ReferenceGenerator">
            <form  onSubmit={formik.handleSubmit}>
                <div className="ReferenceGenerator-InputBlock">
                    <label htmlFor="authorLastName">Authors Last Name</label>
                    <input type="text" className="ReferenceGenerator-InputElement" id="authorLastName" name="authorLastName" onChange={formik.handleChange} value={formik.values.authorLastName}></input>
                </div>
                
                <div className="ReferenceGenerator-InputBlock">
                    <label htmlFor="authorFirstInitial">Authors First initial</label>
                    <input type="text" className="ReferenceGenerator-InputElement" id="authorFirstInitial" name="authorFirstInitial" onChange={formik.handleChange} value={formik.values.authorFirstInitial}></input>
                </div>
                
                <div className="ReferenceGenerator-InputBlock">
                    <label htmlFor="date">Date of publication (Year, Month Day)</label>
                    <input type="text" className="ReferenceGenerator-InputElement" id="date" name="date" onChange={formik.handleChange} value={formik.values.date}></input>
                </div>
                
                <div className="ReferenceGenerator-InputBlock">
                    <label htmlFor="articleTitle">Title of article</label>
                    <input type="text" className="ReferenceGenerator-InputElement" id="articleTitle" name="articleTitle" onChange={formik.handleChange} value={formik.values.articleTitle}></input>
                </div>
                
                <div className="ReferenceGenerator-InputBlock">
                    <label htmlFor="websiteName">Website Name</label>
                    <input type="text" className="ReferenceGenerator-InputElement" id="websiteName" name="websiteName" onChange={formik.handleChange} value={formik.values.websiteName}></input>
                </div>

                <div className="ReferenceGenerator-InputBlock">
                    <label htmlFor="sourceUrl">URL</label>
                    <input type="text" className="ReferenceGenerator-InputElement" id="sourceUrl" name="sourceUrl" onChange={formik.handleChange} value={formik.values.sourceUrl}></input>
                </div>

                <button type='submit'>Submit</button>
            </form>
            <h2>Your Reference</h2>
            <p>{citation}</p>
            <h2>Your In-text Citation</h2>
            <p>{inTextCitation}</p>
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
        <NewStyleForm />
    )
}