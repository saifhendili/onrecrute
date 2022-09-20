import React,{useEffect, useState,Fragment} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Spinner from '../../Layout/Spinner';
import { editoffre, getoffre } from '../../../actions/offre';
import queryString from 'query-string';

function EditOffre({editoffre,getoffre,offre:{loading,offre}, location}) {
    const { id } = queryString.parse(location.search);

  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Address, setAddress] = useState('');
  const [Type, setType] = useState('Internship');
useEffect(()=>{
    getoffre(id);
    
  }, [getoffre,id]);
  return (
    <Fragment>
    {loading || offre === null  ? (
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
                        <h1>Update Offre</h1>
                    </div>
                    <div class="ml-auto d-flex align-items-center">
                            <div>
                              <Link to="/">  <div class="btn btn-primary">
                                        Liste Offre
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
                                <h4 class="card-title">Produits</h4>
                            </div>
                           
                        </div>
                    </div>
                    <div class="card-body py-0 table-responsive">
                    
<form onSubmit={async(e) => {
          e.preventDefault();
       await   editoffre(id,{Title,Description,Address,Type });  
 
           }}>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control"  name='Title' onChange={(e)=>setTitle(e.target.value)}value={Title} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={offre.Title}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" class="form-control" name='Description' onChange={(e)=>setDescription(e.target.value)} value={Description}id="exampleInputPassword1" placeholder={offre.Description}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" class="form-control" name='Address' onChange={(e)=>setAddress(e.target.value)}value={Address} id="exampleInputPassword1" placeholder={offre.Address}/>
  </div>
  <div class="form-group">
  <select
            name='Type'
            value={Type}
            onChange={(e) => setType(e.target.value)}
          >
            <option className='option-type-profile'>Internship</option>
            <option className='option-type-profile'>Job</option>
          </select>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>
        </div>
    
    </div>

    </div>
    </div>  </Fragment>

)}
</Fragment>
)}

  const mapStateToProps = (state) => ({
    offre: state.offre,
  });
    
  export default connect(mapStateToProps, { editoffre,getoffre })(EditOffre);