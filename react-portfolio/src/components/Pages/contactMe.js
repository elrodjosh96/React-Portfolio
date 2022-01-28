import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs, { send } from '@emailjs/browser'

export default function Contact() {

        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                subject: '',
                message: '',
                email: '',
                to_name: 'elrodjosh96@gmail.com'
            },
            validationSchema: Yup.object({
                firstName: Yup.string().max(15, '15 or less').required('Required'),
                lastName: Yup.string().max(15, '15 or less').required('Required'),
                message: Yup.string().message().required('Required'),
                email: Yup.string().email('Invalid email').required('Required')
            }),
            onSubmit: (values) => {
                console.log(values)
            }
        })
        console.log(formik.values);
        return (
            <form onSubmit={formik.handleSubmit}>
                <h1>You can send me an email here for any further questions!</h1>
                <div className='input-container'>
                    <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        placeholder='First Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                </div>
                <div className='input-container'>
                    <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName} />
                        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
                </div>
                <div className='input-container'>
                    <input
                        id='subject'
                        name='subject'
                        type='text'
                        placeholder='Subject'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject} />
                        {formik.touched.subject && formik.errors.subject ? <p>{formik.errors.subject}</p> : null}
                </div>
                <input
                        id='message'
                        name='message'
                        type='text'
                        placeholder='Type Your Message Here'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                <div className='input-container'>
                    <input
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
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
