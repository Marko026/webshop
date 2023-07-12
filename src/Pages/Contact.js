import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('The name required'),
      subject: Yup.string().required('The subject required'),
      email: Yup.string().email("Invalid email").required('The email required'),
      message: Yup.string().required('The message required').min(10, 'The message must be at least 10 characters')


    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm(
        {
          values: {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
        }
      )
    }

  })

  return (
    <div>
      <section className="contact text-center">
        <div className="contact-title text-center py-5">
          <h2 className="fw-lighter">Contact Us</h2>
          <p className="fw-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="container py-5">
          <div className="row py-5">
            <form onSubmit={formik.handleSubmit} className="col-md-9 m-auto" method="post">
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="inputname">Name</label>
                  <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {
                    formik.touched.name && formik.errors.name ?
                      <div className="text-danger">{formik.errors.name}</div>
                      : null
                  }
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="inputemail">Email</label>
                  <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {
                    formik.touched.email && formik.errors.email ?
                      <div className="text-danger">{formik.errors.email}</div>
                      : null
                  }
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputsubject">Subject</label>
                <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {
                  formik.touched.subject && formik.errors.subject ?
                    <div className="text-danger">{formik.errors.subject}</div>
                    : null
                }
              </div>
              <div className="mb-3">
                <label htmlFor="inputmessage">Message</label>
                <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
              </div>
              {
                formik.touched.message && formik.errors.message ?
                  <div className="text-danger">{formik.errors.message}</div>
                  : null
              }
              <div className="row">
                <div className="col text-end mt-2">
                  <button type="submit" className="btn btn-outline-success btn-lg px-3"  >Let’s Talk</button>
                </div>
              </div>
            </form>
          </div>
          <iframe
            className="container"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21272.40650726314!2d16.33356336348394!3d48.20563717554313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sat!4v1688119502730!5m2!1sen!2sat"
            height="450"
            style={{ border: "1" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='map'
          ></iframe>
        </div>
      </section>
    </div >
  )
}

export default Contact