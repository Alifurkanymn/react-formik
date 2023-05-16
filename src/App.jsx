import React from 'react'
import { useFormik } from 'formik';

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      surname: '',
      phonenum: '',
      explanation: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='col-12 w-100 vh-100 align-items-center d-flex flex-column justify-content-center items-center p-4 text-center'>
      <h1 className='mb-5'>React Formik</h1>
      <form className='col-6 d-flex flex-column justify-content-center text-start' onSubmit={formik.handleSubmit}>
       <div className='mb-3'>
        <label className="mb-2" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className='form-control'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
       </div>
       <div className='mb-3'>
        <label className="mb-2" htmlFor="surname">Surname</label>
        <input
          id="surname"
          name="surname"
          type="text"
          className='form-control'
          onChange={formik.handleChange}
          value={formik.values.surname}
        />
       </div>
       <div className='mb-3'>
        <label className="mb-2" htmlFor="phonenum">Phone Number</label>
        <input
          id="phonenum"
          name="phonenum"
          type="phone"
          className='form-control'
          onChange={formik.handleChange}
          value={formik.values.phonenum}
        />
       </div>
       <div className='mb-3'>
        <label className="mb-2" htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className='form-control'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
       </div>
       <div className='mb-3'>
        <label className="mb-2" htmlFor="explanation">Explanation</label>
        <textarea
          rows="5"
          id="explanation"
          name="explanation"
          type="explanation"
          className='form-control'
          onChange={formik.handleChange}
          value={formik.values.explanation}
        />
       </div>
       <button className='btn btn-primary col-3' type="submit">Submit</button>
     </form>
    </div>
  )
}

export default App