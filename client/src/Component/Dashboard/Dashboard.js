import React from 'react'
import PropTypes from 'prop-types'
import ListOffre from '../DRH/Offre/ListOffre'
import Spinner from '../Layout/Spinner'
import { connect } from 'react-redux';
import DashboardClient from '../Condidat/DashboardClient';

function Dashboard({auth:{user,loading}}) {
    return loading || user === null ? (
      <Spinner />
    ) : (
        <div>
{
   user.typeuser =="Condidat" ?<DashboardClient/>  :
   user.typeuser =="DRH" ?<ListOffre/>  :null
}
      </div>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
  
  }
  const mapStateToProps = (state) => ({
    auth: state.auth,
    
  });
  
  export default connect(mapStateToProps, {
    
  })(Dashboard);
  
