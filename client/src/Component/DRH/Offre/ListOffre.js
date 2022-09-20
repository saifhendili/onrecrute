import React,{useEffect,Fragment,useState} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import OffreItem from './OffreItem';
import { Link } from 'react-router-dom';
import { getoffres } from '../../../actions/offre';


function ListOffre({getoffres,offre:{loading,offres}}) {
    const [Search, setSearch] = useState('');

    useEffect(() => {
        getoffres();
      },[]);
    
  return (
    <Fragment>
    {loading || offres === null ? (
      <Spinner />
    ) : (    
     <Fragment>
        <div class="app-container">


<div class="app-main" id="main">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 m-b-30">
            <div class="d-block d-sm-flex flex-nowrap align-items-center">
                <div class="page-title mb-2 mb-sm-0">
                    <h1>Offre</h1>
                </div>
                
                <div class="ml-auto d-flex align-items-center">
                <div className="main-form">
              <label htmlFor="main-search" />
              <input className="input-text input-text--border-radius input-text--style-1" type="text" onChange={(e)=>setSearch(e.target.value)} id="main-search" placeholder="Search" />
              <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></div>
                        <div>
                          <Link to="AddOffre">  <div class="btn btn-primary">
                                    Ajouter Offre
                            </div></Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
   
    <div class="row">
        <div class="col-12">
            <div class="card card-statistics clients-contant">
                <div class="card-header">
                    <div class="d-xxs-flex justify-content-between align-items-center">
                        <div class="card-heading">
                            <h4 class="card-title">Offres</h4>
                        </div>
                       
                    </div>
                </div>
                <div class="card-body py-0 table-responsive">
                    <table class="table clients-contant-table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Address</th>
                                <th scope="col">Type</th>
                                <th scope="col">Detail</th>
                                <th scope="col">Modifié</th>
                                <th scope="col">Supprimé</th>
                            </tr>
                        </thead>
                        <tbody>
                       
              {offres.filter(el =>el.Title.toLowerCase().includes(Search.toLowerCase())).map((x)=>(<OffreItem  key={x._id} x={x} />))}
                                    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>

</div>
</div>
</Fragment>

  )}
</Fragment>
)}
ListOffre.propTypes = {
    getoffres: PropTypes.func.isRequired,
    offre: PropTypes.object.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    offre: state.offre,
  });
  
  export default connect(mapStateToProps, { getoffres })(ListOffre); 