import '../../css/App.css';
import React from 'react';

const ReferenceElements = () => {
    return (
        <p>
            The function of referencing and citation is to point your reader (or marker) to the sources you've used in your work, and to give academic credit to the original authors of those sources. In order to do this, you need to answer four basic questions about your sources:
            Who wrote it?

            This will provide the author element of your reference and citation. It can be an individual, a group of people, or an organisation.
            When was it published?

            This will provide the date element of your reference. It is usually the copyright date for books, and the publication date for journal articles. For information about dates for webpages please see the guidance here.
            What is the title?

            This will provide the title element of your reference. The title is the name of the book, article or other source. 
            Where did you find it?

            This will provide the source element of your reference.

            For books, this will be the publisher. For articles, it will be the name of the journal, magazine or website it was published in or on. Journals and magazines will usually have volume and/or issue number details to help identify the exact copy it appeared in. 

            For online versions of sources, this will also include the DOI or URL where it can be found online. 
        </p>
    )
}

export default function Home() {
    return (
        <div>
            <h1>Academic Referencing Generator</h1>
            <ReferenceElements />
        </div>
    )
    
}