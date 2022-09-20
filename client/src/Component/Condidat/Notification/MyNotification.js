import React,{useEffect,Fragment,useState} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import { Myuser } from '../../../actions/auth';

function MyNotification({Myuser,offre:{loadingUser,user}}) {


  useEffect(() => {
    Myuser();
  }, []);
  return (
    <Fragment>
    {loadingUser || user === null  ? (
      <Spinner />
    ) : (    
        <div className='bgthisapptest'>
        <div class="bg-primary text-center text-white font-weight-bold p-3">
        {user?.Notification.length} Notifications
        </div>
        <div class="list-group list-group-flush">
            {user?.Notification.map((x,i)=>
            <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
            {x.State=="AcceptForEntretien"?    <div class="ui-icon ui-icon-sm feather  icon-check-circle bg-success border-0 text-white"></div>:
             <div class="ui-icon ui-icon-sm feather icon-x-circle bg-danger border-0 text-white"></div>
            }
            <div class="media-body line-height-condenced ml-3">
                <div class="text-dark">{x.Title}</div>
                
                {x.State=="AcceptForEntretien"?<div class="text-light small mt-1">You are Accepted for entretien at {x.MeetingTime}
                </div>:x.State=="RejectedForEntretien"?<div class="text-light small mt-1">You are Rejected for entretien
                </div>:null}
            </div>
        </a>
            )}

       
        </div>
    </div>

)}
</Fragment>
)}

const mapStateToProps = (state) => ({
    offre: state.offre,
});
  
export default connect(mapStateToProps, { Myuser})(MyNotification);