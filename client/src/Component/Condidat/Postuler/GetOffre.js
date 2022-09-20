import React,{useEffect,Fragment,useState} from 'react'
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import { addResume, getoffre } from '../../../actions/offre';

function GetOffre({addResume,getoffre,offre:{loading,offre}, location}) {
    const { id } = queryString.parse(location.search);
    const [email,setemail]=useState("")
    const [resume,setresume]=useState("")
    const onChangeFile=e=>{
        setresume(e.target.files[0]);
    }


    const onsubmit = (e) => {
        e.preventDefault();
     
        const formData=new FormData();
        formData.append("email",email);
        formData.append("resume",resume)
       
        setemail("")
        
        
        addResume(id,formData)
       
    }

  useEffect(() => {
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
              
            </div>
        </div>
       
        <div class="row mb-4 fixmargingetoffre">
            <div class=" align-items-center fixmargingetoffre">
                <div class="card card-statistics clients-contant">
                    <div class="card-header">
                        <div class="d-xxs-flex justify-content-between align-items-center">
                            <div class="card-heading">
                                <h4 class="card-title">Offre {offre.Type}</h4>
                            </div>
                           
                        </div>
                    </div>
                    <div class="card-body py-0 table-responsive">
                    <div class="d-flex flex-row comment-row ">
					<div class="p-2"><span class="round"></span></div>
					<div class="comment-text w-100">
						<h2>Position: <span class="date">{offre.Title} </span></h2>
						<div class="comment-footer">
                        <h2>Date: <span class="date">{offre.date} </span></h2> 
							<h2>Address: <span class="date">{offre.Address}</span></h2>

						</div><div className=''>
                        <h2>Description:	<p class="m-b-5 m-t-10 fix-wosth">{offre.Description}</p></h2>
						</div>
					</div>
				</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-heading">
                                <h4 class="card-title">Postuler</h4>
                            </div>
        <div class="fixmargingetoffre">
        {/* card mb-4  */}
                            <div class="card-body ">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data">
                                    <div class="form-group">
                                        <label class="form-label">Email address</label>
                                        <input type="email" value={email} onChange={(e) =>setemail(e.target.value)}  class="form-control" placeholder="Email"/>
                                        <div class="clearfix"></div>
                                    </div>
                                   
                                    <div class="form-group">
                                        <label class="form-label w-100">File input</label>
                                        <input type="file" onChange={(e) =>onChangeFile(e)} name="resume" />
                                        <small class="form-text text-muted">Example block-level help text here.</small>
                                    </div>

                                  
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
    </div>
    
    </div>
    </div>  </Fragment>

)}
</Fragment>
)}
GetOffre.propTypes = {
    getoffre: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  offre: state.offre,
});
  
export default connect(mapStateToProps, { getoffre,addResume})(GetOffre);