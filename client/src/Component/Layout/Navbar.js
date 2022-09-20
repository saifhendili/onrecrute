import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function Navbar({ auth: { isAuthenticated, loading, user }, logout }) {
  const loggout = (e) => {
    e.preventDefault();
    logout();
  };

  const CondidatLinks = (
    <Fragment>
    <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">
  
    <img src="/logonouha-removebg-preview.png" width="80px" height="60px" />

  
  <div class="navbar-collapse collapse" id="layout-navbar-collapse">
      <hr class="d-lg-none w-100 my-2"/>
  
  
  
      <div class="navbar-nav align-items-lg-center ml-auto">
    
      <Link to="dashboard" class="nav-link">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Job Offre</span>
                  </span>
              </Link>
      <Link to="InternshipList" class="nav-link">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Internship Offre</span>
                  </span>
              </Link>

              <div class="demo-navbar-notifications nav-item dropdown mr-lg-3">
                                <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
                                    <i class="feather icon-bell navbar-icon align-middle"></i>
                                    <span class="badge badge-danger badge-dot indicator"></span>
                                    <span class="d-lg-none align-middle">&nbsp; Notifications</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <div class="bg-primary text-center text-white font-weight-bold p-3">
                                    {user?.Notification.length} Notifications
                                    </div>
                                    <div class="list-group list-group-flush">
                                        {user?.Notification.map((x,i)=>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                        {x.State=="AcceptForEntretien"?    <div class="ui-icon ui-icon-sm feather  icon-check-circle bg-success border-0 text-white"></div>:
                                        x.State=="AcceptedForJob"?    <div class="ui-icon ui-icon-sm feather  icon-check-circle bg-success border-0 text-white"></div>:
                                         <div class="ui-icon ui-icon-sm feather icon-x-circle bg-danger border-0 text-white"></div>
                                        }
                                        <div class="media-body line-height-condenced ml-3">
                                            <div class="text-dark">{x.Title}</div>
                                            
                                            {x.State=="AcceptForEntretien"?<div class="text-dark small mt-1">You are Accepted for entretien at {x.MeetingTime} <br/> <Link to={`${x.Meetingid}`}>Link</Link>

                                            </div>:x.State=="RejectedForEntretien"?<div class="text-dark small mt-1">You are Rejected for entretien
                                            </div>:x.State=="RejectedForJob"?<div class="text-dark small mt-1">You are Rejected for this job 
                                            </div>:x.State=="AcceptedForJob"?<div class="text-dark small mt-1">You are Accepted for this job 
                                            </div>:null}
                                        </div>
                                    </a>
                                        )}

                                   
                                    </div>
                                    <Link to="MyNotification" class="d-block text-center text-dark small p-2 my-1">Show all notifications</Link>
                                </div>
                            </div>






          <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
          <div class="demo-navbar-user nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png" alt class="d-block ui-w-30 rounded-circle"/>
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">{user?.firstname} {user?.lastname}</span>
                  </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                
                  <div class="dropdown-divider"></div>
                  <a onClick={(e) => loggout(e)} href='#!' class="dropdown-item">
                      <i class="feather icon-power text-danger"></i> &nbsp; Log Out</a>
              </div>
          </div>
      </div>
  </div>
  </nav>
   </Fragment>
  );



  const authLinks = (
    <Fragment>
    <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">
  
  
    <img src="/logonouha-removebg-preview.png" width="80px" height="60px" />

  <div class="navbar-collapse collapse" id="layout-navbar-collapse">
      <hr class="d-lg-none w-100 my-2"/>
  
  
  
      <div class="navbar-nav align-items-lg-center ml-auto">
     
      <div class="demo-navbar-notifications nav-item dropdown mr-lg-3">
                                <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
                                    <i class="feather icon-bell navbar-icon align-middle"></i>
                                    <span class="badge badge-danger badge-dot indicator"></span>
                                    <span class="d-lg-none align-middle">&nbsp; Notifications</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <div class="bg-primary text-center text-white font-weight-bold p-3">
                                    {user?.Notification.length} Notifications
                                    </div>
                                    <div class="list-group list-group-flush">
                                        {user?.Notification.map((x,i)=>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                       {x.State=="AcceptForEntretien"?    <div class="ui-icon ui-icon-sm feather  icon-check-circle bg-success border-0 text-white"></div>:
                                        x.State=="AcceptedForJob"?    <div class="ui-icon ui-icon-sm feather  icon-check-circle bg-success border-0 text-white"></div>:
                                         <div class="ui-icon ui-icon-sm feather icon-x-circle bg-danger border-0 text-white"></div>
                                        }
                                        <div class="media-body line-height-condenced ml-3">
                                            <div class="text-dark">{x.Title}</div>
                                            
                                            {x.State=="AcceptForEntretien"?<div class="text-dark small mt-1">{x.firstname} {x.lastname} <br/> Accepted for entretien at {x.MeetingTime} <br/> <Link to={`${x.Meetingid}`}>Link</Link>

                                            </div>:x.State=="RejectedForEntretien"?<div class="text-dark small mt-1">{x.firstname} {x.lastname}<br/>  are Rejected for entretien
                                            </div>:x.State=="RejectedForJob"?<div class="text-dark small mt-1">{x.firstname} {x.lastname}<br/> are Rejected for this job 
                                            </div>:x.State=="AcceptedForJob"?<div class="text-dark small mt-1">{x.firstname} {x.lastname}<br/> are Accepted for this job 
                                            </div>:null}
                                        </div>
                                    </a>
                                        )}

                                   
                                    </div>
                                    <Link to="MyNotification" class="d-block text-center text-dark small p-2 my-1">Show all notifications</Link>
                                </div>
                            </div>
      <Link to="dashboard" class="nav-link">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Dashboard</span>
                  </span>
              </Link>
          <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
          <div class="demo-navbar-user nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png" alt class="d-block ui-w-30 rounded-circle"/>
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">{user?.firstname} {user?.lastname}</span>
                  </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
  
                  <div class="dropdown-divider"></div>
                  <a onClick={(e) => loggout(e)} href='#!' class="dropdown-item">
                      <i class="feather icon-power text-danger"></i> &nbsp; Log Out</a>
              </div>
          </div>
      </div>
  </div>
  </nav>
   </Fragment>
    );

  const guestLinks = (

    <Fragment>
    <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-dark container-p-x" id="layout-navbar">
  
    <img src="/logonouha-removebg-preview.png" width="80px" height="60px" />

  
  <div class="navbar-collapse collapse" id="layout-navbar-collapse">
      <hr class="d-lg-none w-100 my-2"/>
  
  
  
      <div class="navbar-nav align-items-lg-center ml-auto">
     
      <Link to="login" class="nav-link">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Sign in</span>
                  </span>
              </Link>
      <Link to="register" class="nav-link">
                  <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                      <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Sing up</span>
                  </span>
              </Link>
    
      </div>
  </div>
  </nav>
   </Fragment>
  );

  const adminLinks = (
    <div className='navbarlogin navbaradmin'>
      <ul className='listnavbar'>
        <li>
          <Link to='Dashboard' className='linknav'>
            <FontAwesomeIcon icon={faCog} />
            DashboardAdmin
          </Link>

          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  return (
    <div className='mynavvbar'>
      <Fragment>
        {loading
          ? null
          : isAuthenticated && user !== null && user.typeuser == 'DRH'
          ? authLinks
          : isAuthenticated && user !== null && user.typeuser == 'Condidat'
          ? CondidatLinks
          : guestLinks}
      </Fragment>

      {/* <Fragment>
        {profile === null || loading
          ? null
          : isAuthenticated && profile.user.typeuser == 'isAdmin'
          ? adminLinks
          : isAuthenticated
          ? authLinks
          : guestLinks}
      </Fragment> */}
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

  // logoutadmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,

  // admin: state.admin,
});

export default connect(mapStateToProps, {
  logout,
})(Navbar);
