import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../../../actions/auth"

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const { email, password } = formData

    login({ email, password })
  };

  if (isAuthenticated) {
    return (
      <Redirect to="/mina-sidor/sparat" />
    )
  }

  return (
    <Fragment>
      <div id='login'>
        <div className='container'>
          <div className='login-box'>
            <h3>Logga in</h3>

            <p>Slå in din e-postaddress och lösenord.</p>

            <form onSubmit={onSubmit}>
              <div className='input-details'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='E-postaddress'
                  onChange={(e) => onChange(e)}
                />

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Lösenord'
                  minLength="6"
                  onChange={(e) => onChange(e)}
                />
              </div>

              <br />
              <div className='remember-me'>
                <input type='checkbox' name='remember' id='remember' />
                <label htmlFor='remember'>Håll mig inloggad</label>
              </div>

              <button className='login'>Logga in</button>
            </form>

            <Link to='/mina-sidor/anvandare/ny' className='forgot'>
              Ingen användare? Skapa konto här
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
