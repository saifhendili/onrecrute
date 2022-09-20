import React,{useEffect,Fragment} from 'react'
import { getoffres } from '../../actions/offre'

import './DashboardClient.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
function DashboardClient({getoffres,offre:{loading,offres}}) {
    useEffect(() => {
        getoffres();
      },[]); 
  return (
	<Fragment>
    {loading || offres === null ? (
      <Spinner />
    ) : (    
     <Fragment>
<div class="container  fix-margin">
  <div class="row">
      <div class="col-md-12">
	  <div class="media align-items-center h4">
	  <div class="ion ion-md-card ui-w-60 text-center text-large"></div>
                                    <div class="media-body ml-1">
                                        Job Offre
                                        <div class="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
                                    </div>
                                </div>
{offres.map((x,i)=>
x.Type=="Job"?
  <div class="bg-white ui-bordered mb-2 fix-wosth">
  <a href="#company-faq-1" class="d-flex justify-content-between text-dark py-3 px-4" data-toggle="collapse">{x.Title} (Address)<span class="collapse-icon"></span></a>
  <div id="company-faq-1" class="collapse text-muted">
	  <div class="px-4 pb-3">{x.date}</div>
	  <div class="px-4 pb-3">{x.Description}</div>
	  <Link to={`/offredetails?id=${x._id}`}>
	  <button type="button" class="btn btn-round btn-info fix-btn"> Postuler</button></Link>

  </div>
</div>:null
)}
                              


      </div>
  </div>
</div>
</Fragment>

  )}
</Fragment>
 )
}

DashboardClient.propTypes = {
    getoffres: PropTypes.func.isRequired,
    offre: PropTypes.object.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    offre: state.offre,
  });
 
export default connect(mapStateToProps, { getoffres }) (DashboardClient)