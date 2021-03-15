import React, { Fragment, useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { register } from "../../../actions/auth"

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  })

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const { email, password, password2 } = formData

    if (password === password2) {
      register({ email, password })
    } else {
      console.log("Passwords didn't match!")
    }
  }

  if (isAuthenticated) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <Fragment>
      <div id='login'>
        <div className='container'>
          <div className='login-box'>
            <h3 className="skapa-konto">Skapa konto</h3>

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
                  placeholder='Välj lösenord'
                  minLength="6"
                  onChange={(e) => onChange(e)}
                />

                <input
                  type='password'
                  name='password2'
                  id='password2'
                  placeholder='Bekräfta lösenord'
                  minLength="6"
                  onChange={(e) => onChange(e)}
                />
              </div>

              <br />
              {/* <div className='remember-me'>
                <input type='checkbox' name='remember' id='remember' />
                <label htmlFor='remember'>Håll mig inloggad</label>
              </div> */}

              <button className='login'>Skapa konto</button>
            </form>

            <Link to='/mina-sidor/logga-in' className='forgot'>
              Har du redan ett konto? Logga in här
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

export default connect(mapStateToProps, { register })(Register)
