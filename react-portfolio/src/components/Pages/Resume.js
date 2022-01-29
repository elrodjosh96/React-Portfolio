import React from 'react';
// CSS
import '../css/resume.css';

export default function Resume ({ currPage, setCurrPage }) {
    return <div className='container resume-section'>
        <iframe title='resume-pdf' src="https://drive.google.com/file/d/1TcpaPsWmyyucNMLgjaufVNtJV7e-jk7c/preview" width="90%" allow="autoplay"></iframe>
        <br/>
        <br/>
        <a className='resume-link' href='https://drive.google.com/file/d/1TcpaPsWmyyucNMLgjaufVNtJV7e-jk7c/preview'>You can download a copy of My Resume here!</a>
    </div>
};

// import React from "react";

// export default function Resume() {
//     return (
//         <div>
//             <h1>Here are some of the languages/skills I have learned so far!</h1>
//             <div>

//                 <span className="frontend">
//                     <h2>Front-end:</h2>
//                     <h3>
//                         <ul>
//                             <li>HTML</li>
//                             <li>CSS</li>
//                             <li>Bootstrap</li>
//                             <li>Bulma</li>
//                             <li>JavaScript</li>
//                         </ul>
//                     </h3>
//                 </span>

//                 <span className="backend">
//                     <h2>Back-end:</h2>
//                     <h3>
//                         <ul>
//                             <li>mySQL</li>
//                             <li>Node.js</li>
//                             <li>API routing</li>
//                             <li>Express.js</li>
//                             <li>GraphQL</li>
//                             <li>Inquirer.js</li>
//                         </ul>
//                     </h3>
//                 </span>
//             </div>
//         </div>
//     );
// }