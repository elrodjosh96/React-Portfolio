import React from 'react';
// CSS
import '../css/resume.css';

export default function Resume ({ currPage, setCurrPage }) {
    return <div className='container resume-section'>
        <iframe title='resume-pdf' src="https://drive.google.com/file/d/1CKMgmwrODC4hCp4qjmDjV3z5qa-eGKZ6/preview" width="90%" allow="autoplay"></iframe>
        <br/>
        <br/>
        {/* <a className='resume-link' href='https://drive.google.com/file/d/19-d2Pomi8aj1vGR8OdNrUnvcnn2s16iZ/preview'>You can download a copy of My Resume here!</a> */}
    </div>
};

