import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { SetAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import img from '../../image/formation2.jpg';

function Register({ SetAlert, register, isAuthenticated }) {
  const [fromData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    typeuser: 'Condidat',
  });
  const {
    firstname,
    lastname,
    email,
    password,
    password2,
    typeuser,
  } = fromData;
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    if (password !== password2) SetAlert('Password do not match', 'danger');
    else {
      register({
        firstname,
        lastname,
        email,
        password,
        password2,
        typeuser,
      });
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    // <div className='bodyregister'>
    //   <img className='imageloginn' src={img} />

    //   <div className='formsignupreg'>
    //     <p className='signuplogo'>Sign Up</p>
    //     <div className='create-pro'>
    //       <FontAwesomeIcon className='faUser' icon={faUser} />

    //       <p className='paragraphe-create-pro'>Create Your Account</p>
    //     </div>

    //     <form className='register-form' onSubmit={(e) => onsubmit(e)}>
    //       <input
    //         className='myinput'
    //         type='text'
    //         placeholder='First Name'
    //         name='firstname'
    //         value={firstname}
    //         onChange={(e) => hundelchange(e)}
    //       />
    //       <input
    //         className='myinput'
    //         type='text'
    //         placeholder='Last Name'
    //         name='lastname'
    //         value={lastname}
    //         onChange={(e) => hundelchange(e)}
    //       />
    //       <input
    //         className='myinput'
    //         type='email'
    //         placeholder='Email'
    //         name='email'
    //         value={email}
    //         onChange={(e) => hundelchange(e)}
    //       />
    //       <input
    //         className='myinput'
    //         type='password'
    //         placeholder='Password'
    //         name='password'
    //         value={password}
    //         minLength='6'
    //         onChange={(e) => hundelchange(e)}
    //       />
    //       <input
    //         className='myinput'
    //         type='password'
    //         placeholder='Confirm Password'
    //         minLength='6'
    //         name='password2'
    //         value={password2}
    //         onChange={(e) => hundelchange(e)}
    //       />
      
    
    //       <input className='submitcreatepro' type='submit' value='Sign Up' />
    //     </form>
    //     <p className='footerhome'>
    //       Already have an account?
    //       <Link to='/login'>
    //         <span className='spansign'>Sign In</span>{' '}
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    <div class="authentication-wrapper authentication-1 mypaading px-4">
    <div class="authentication-inner py-5">

        <div class="d-flex justify-content-center align-items-center">
            <div class="ui-w-60">
                <div class="w-100 position-relative">
                    <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid"/>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

        <form class="my-5" onSubmit={(e) => onsubmit(e)}>
        <div class="form-group">
                <label class="form-label">First Name</label>
                <input type="text" class="form-control"    name='firstname'
      value={firstname}
      placeholder='First Name'
            onChange={(e) => hundelchange(e)}/>
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label">Last Name</label>
                <input type="text" class="form-control"    name='lastname'
      value={lastname}
      placeholder='LastName'
            onChange={(e) => hundelchange(e)}/>
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label">Your email</label>
                <input type="email" class="form-control"   placeholder='Email' onChange={(e) => hundelchange(e)} value={email}  name='email'/>
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" placeholder='Password' name='password' value={password}  minLength='6' onChange={(e) => hundelchange(e)}/>
                <div class="clearfix"></div>
            </div>
            <div class="form-group">
                <label class="form-label">Confirm Password</label>
                <input type="password" class="form-control" placeholder='Confirm Password' name='password2' value={password2}  minLength='6' onChange={(e) => hundelchange(e)}/>
                <div class="clearfix"></div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-4">Sign Up</button>
         
        </form>

        <div class="text-center text-muted">
            Already have an account?
            <a href="pages_authentication_login-v1.html">Sign In</a>
        </div>

    </div>
</div>
  );
}

Register.propTypes = {
  SetAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { SetAlert, register })(Register);