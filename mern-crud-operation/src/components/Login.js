import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {
    const [formData, setFormData] = useState()

    const collectData = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:5000/login', formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  return (
    <div className='container w-50 mt-3'><form onSubmit={onSubmit}>
    {/* <!-- Email input --> */}
    <div className="form-outline mb-4">
      <input type="email" onChange={collectData} name="email" id="form2Example1" className="form-control" />
      <label className="form-label" htmlFor="form2Example1">Email address</label>
    </div>
  
    {/* <!-- Password input --> */}
    <div className="form-outline mb-4">
      <input type="password" onChange={collectData} name="password" id="form2Example2" className="form-control" />
      <label className="form-label" htmlFor="form2Example2">Password</label>
    </div>
  
    {/* <!-- 2 column grid layout for inline styling --> */}
    <div className="row mb-4">
      <div className="col d-flex justify-content-center">
        {/* <!-- Checkbox --> */}
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
          <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div className="col">
        {/* <!-- Simple link --> */}
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    {/* <!-- Submit button --> */}
    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
  
    {/* <!-- Register buttons --> */}
    <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-google"></i>
      </button>
  
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-twitter"></i>
      </button>
  
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-github"></i>
      </button>
    </div>
  </form></div>
  )
}
