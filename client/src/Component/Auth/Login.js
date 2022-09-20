import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import img from '../../image/formation2.jpg';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Login({ login, isAuthenticated }) {
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = fromData;
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }
  return (
  
    <div class="authentication-wrapper authentication-1 mypaading px-4">
    <div class="authentication-inner py-5">

        <div class="d-flex justify-content-center align-items-center">
            <div class="ui-w-60">
                <div class="w-100 position-relative">
                    <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid"/>
                </div>
            </div>
        </div>

        <form class="my-5" onSubmit={(e) => onsubmit(e)}>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" 
       placeholder='Email'
   name='email'
           value={email}
          onChange={(e) => hundelchange(e)}
        required/>
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label d-flex justify-content-between align-items-end">
                    <span>Password</span>
                    <a href="pages_authentication_password-reset.html" class="d-block small">Forgot password?</a>
                </label>
                <input type="password" class="form-control" name='password'
         value={password}
         minLength='6'
onChange={(e) => hundelchange(e)}
      required />
                <div class="clearfix"></div>
            </div>
            <div class="d-flex justify-content-between align-items-center m-0">
               
                <button type="submit" class="btn btn-primary">Sign In</button>
            </div>
        </form>

        <div class="text-center text-muted">
            Don't have an account yet?
            <a href="pages_authentication_register-v1.html">Sign Up</a>
        </div>

    </div>
</div>

  );
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);