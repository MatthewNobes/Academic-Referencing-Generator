import '../../css/App.css';
import React, { useState } from 'react';
import { useFormik } from 'formik';

 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

const NewStyleForm = () => {

    const [sourceTypes, appendSourceTypes] = useState(['APA 7th', 'Chicago', 'OSCOLA', 'Vancouver'])
    const [sourceOptions, appendsourceOptions] = useState(['Print', 'Online'])



    const [citation, appendCitation] = useState('')

    const [inTextCitation, appendInTextCitation] = useState('');

    const GenerateCitation = (values) => {
        const authorInfo = values.authorLastName + ' ' + values.authorFirstInitial + '. '
        const date = values.date
        const siteInfo =  values.articleTitle + ' ' + values.websiteName + '. '
        const refer = authorInfo + ' ' + date + ' ' + siteInfo + values.sourceUrl;
        appendCitation(refer);
    }

    const GenerateInTextCitation = (values) => {
        const refer = `(${values.authorLastName} ${values.date})`
        appendInTextCitation(refer);
    }

    const formik = useFormik({
        initialValues: {
            sourceType: '',
            sourceOptions: '',

            authorLastName: '',
            authorFirstInitial: '',
            date: '',
            articleTitle: '',
            websiteName: '',
            sourceUrl: ''
        },
        onSubmit: (values) => { 
            debugger;
            GenerateCitation(values);
            GenerateInTextCitation(values);
            console.log(values.sourceType);
        }
    });

    console.log(formik.values);

    return (
        <div className="ReferenceGenerator">
            <form  onSubmit={formik.handleSubmit}>
                <div>
                    <h1>Reference options</h1>

                        <div className="ReferenceGenerator-InputBlock">
                            <Box pt={2} pd={2}>
                                <Autocomplete options={sourceTypes} 
                                    fullWidth
                                    className="ReferenceGenerator-InputBlock" 
                                    id="sourceType"
                                    name="sourceType"
                                    onChange={(e, value) => formik.setFieldValue("sourceType", value)}
                                    value={formik.values.sourceType}
                                    renderInput={(params) =>
                                    <TextField {...params} className="ReferenceGenerator-InputBlock"  label="Referencing Style" variant="outlined" />}
                                />
                            </Box>

                            <Box pt={2} pd={2}>
                                <Autocomplete options={sourceOptions} 
                                    fullWidth
                                    className="ReferenceGenerator-InputBlock" 
                                    id="sourceOptions"
                                    name="sourceOptions"
                                    onChange={(e, value) => formik.setFieldValue("sourceOptions", value)}
                                    value={formik.values.sourceOptions}
                                    renderInput={(params) =>
                                    <TextField {...params} className="ReferenceGenerator-InputBlock"  label="Source Options" variant="outlined" />}
                                />
                            </Box>
                        </div> 
                </div>

                <div>
                    <h1>Reference details</h1>
                    
                    
                    <Box pt={2} pd={2}>
                        <TextField 
                            fullWidth
                            id="authorLastName" 
                            name="authorLastName" 
                            value="authorLastName"
                            type="text"
                            className="ReferenceGenerator-InputBlock" 
                            onChange={formik.handleChange} 
                            value={formik.values.authorLastName} 
                            label="Authors Last Name" 
                            variant="outlined" 
                        />
                    </Box>
                    
                    <Box pt={2} pd={2}>
                        <TextField 
                            fullWidth
                            id="authorFirstInitial" 
                            name="authorFirstInitial" 
                            value="authorFirstInitial"
                            type="text"
                            className="ReferenceGenerator-InputBlock" 
                            onChange={formik.handleChange} 
                            value={formik.values.authorFirstInitial} 
                            label="Authors First Name" 
                            variant="outlined" 
                        />
                    </Box>
                    
                    
                    <div className="ReferenceGenerator-InputBlock">
                        <label htmlFor="date">Date of publication (Year, Month Day)</label>
                        <input type="date" className="ReferenceGenerator-InputElement" id="date" name="date" onChange={formik.handleChange} value={formik.values.date}  />
                    </div>
                    
                    <Box pt={2} pb={2}>
                        <TextField 
                            fullWidth
                            id="articleTitle" 
                            name="articleTitle" 
                            value="articleTitle"
                            type="text"
                            className="ReferenceGenerator-InputBlock" 
                            onChange={formik.handleChange} 
                            value={formik.values.articleTitle} 
                            label="Title of article" 
                            variant="outlined" 
                        />
                    </Box>
                    
                    <Box pt={2} pd={2}>
                        <TextField 
                            fullWidth
                            id="websiteName" 
                            name="websiteName" 
                            value="websiteName"
                            type="text"
                            className="ReferenceGenerator-InputBlock" 
                            onChange={formik.handleChange} 
                            value={formik.values.websiteName} 
                            label="Website Name" 
                            variant="outlined" 
                        />
                    </Box>
                    
                    <Box pt={2} pd={2}>
                        <TextField 
                            fullWidth
                            id="sourceUrl" 
                            name="sourceUrl" 
                            value="sourceUrl"
                            type="text"
                            className="ReferenceGenerator-InputBlock" 
                            onChange={formik.handleChange} 
                            value={formik.values.sourceUrl} 
                            label="Site URL" 
                            variant="outlined" 
                        />
                    </Box>
                    
                </div>
                
                <Button varient="outlined" type='submit'>Submit</Button>
            </form>
            <h2>Your Reference</h2>
            <p>{citation}</p>
            <h2>Your In-text Citation</h2>
            <p>{inTextCitation}</p>
        </div>
    )
}

export default function OptionsForm() {
    return (
        <NewStyleForm />
    )
}