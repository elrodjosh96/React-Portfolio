import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs, { send } from '@emailjs/browser'



export default function Contact() {

    const formik = useFormik({
        initialValues: {
            reply_to: '',
            subject: '',
            message: '',
            to_name: 'elrodjosh96@gmail.com'
        },
        validationSchema: Yup.object({
            reply_to: Yup.string().email('Invalid email').required('Required'),
            subject: Yup.string().max(20, '20 or less').required('Required'),
            message: Yup.string().required('Required'),
        }),

        onSubmit: (values) => {
            const serviceID = 'service_ubjz8ut';
            const templateID = 'template_0bsdsad';
            const userID = 'user_p2HjOuQpvTl4iEXUHAS70';

            try {
                emailjs.send(serviceID, templateID, values, userID)
                    .then(() => {
                        console.log('Success!')
                        alert('Thank you for your email! I will respond as soon as I can! Have a great day!')
                    })
            }
            catch {
                console.log('ERROR')
            }
        }
    });
        console.log(formik.values)
    return (

        <form onSubmit={formik.handleSubmit}>
            <h1>You can send me an email here for any further questions!</h1>
            <div className='input-container'>
                <input
                    id='reply_to'
                    name='reply_to'
                    onChange={formik.handleChange}
                    type='reply_to'
                    placeholder='Your Email'
                    onBlur={formik.handleBlur}
                    value={formik.values.reply_to}
                />
                {formik.touched.reply_to && formik.errors.reply_to ? <p>{formik.errors.reply_to}</p> : null}
            </div>
            <div className='input-container'>
                <input
                    id='subject'
                    name='subject'
                    onChange={formik.handleChange}
                    type='subject'
                    placeholder='Subject'
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject ? <p>{formik.errors.subject}</p> : null}
            </div>
            <div className='input-container'>
                <input
                    id='message'
                    name='message'
                    onChange={formik.handleChange}
                    type='message'
                    placeholder='Please type your message here.'
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? <p>{formik.errors.message}</p> : null}
            </div>
            {/* <div>
                <input
                    id='message'
                    name='message'
                    type='text'
                    placeholder='Type Your Message Here'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
            </div>
            <div className='input-container'>
                <input
                    id='reply_to'
                    name='reply_to'
                    type='text'
                    placeholder='Reply To'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.reply_to} />
                {formik.touched.reply_to && formik.errors.reply_to ? <p>{formik.errors.reply_to}</p> : null}
            </div> */}
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
