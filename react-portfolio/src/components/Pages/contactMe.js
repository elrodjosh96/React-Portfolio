import React from "react";

export default function Contact() {
    return (
        <div>
            <h1>Contact me Here.</h1>
        </div>
    )
}
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';

// const contactMe = () => (
//   <div>
//     <h1>Feel free to reach out if you have any questions!</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
// );

// ReactDOM.render(<Basic />, document.getElementById('root'));
