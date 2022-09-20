import React,{useEffect,Fragment,useState} from 'react'
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import { Accepted, AcceptedJob,RejectedJob, getoffre, Rejected } from '../../../actions/offre';

function ShowDetails({AcceptedJob,RejectedJob,Accepted,Rejected,getoffre,offre:{loading,offre}, location}) {
    const { id } = queryString.parse(location.search);

    const [MeetingTime, setMeetingTime] = useState("");
 
  useEffect(() => {
    getoffre(id);
  }, [getoffre,id,Accepted,Rejected]);
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
                        <h1>Offre</h1>
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
                                <h4 class="card-title">Offre</h4>
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
                                    <th scope="col">Modifié</th>                   
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
    <td>
        <div class="d-flex align-items-center">
      
            <p class="font-weight-bold">{offre.Title}</p>
        </div>
    </td>
    <td>{offre.Description}</td>
    <td>{offre.Address}</td>
    <td>{offre.Type}</td>
    <td>
   <Link to={`/EditOffre?id=${offre._id}`} > <div class="btn btn-secondary">Modifié</div></Link>
    </td>

    </tr>
                            </tbody>
                        </table>
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
                                <h4 class="card-title">Condidat</h4>
                            </div>
                           
                        </div>
                    </div>
                    <div class="card-body py-0 table-responsive">
                        <table class="table clients-contant-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Resume</th>    
                                    <th scope="col">Meeting time</th> 
                                    <th scope="col">Accept</th>                   
                                    <th scope="col">Reject</th> 
                                                      
                                </tr>
                            </thead>
                            <tbody>
                                {offre.Condidature.map((x,i)=>
                                x.State=="untreated"?
                                          <tr>
                                          <td>
                                              <div class="d-flex align-items-center">
                                            
                                                  <p class="font-weight-bold">{x.firstname} {x.lastname}</p>
                                              </div>
                                          </td>
                                          <td>{x.email}</td>
                                          
                                          <td> <a href={`/resumes/${x.resume}`} download ><img src="assets/pdf.png" width="50px" height="50px" /></a></td>                                     <td><input type='date' onChange={(e)=>setMeetingTime(e.target.value)}/></td>
                                          <td>{MeetingTime?<button className='btn btn-success'onClick={e=>Accepted(id,x._id,{MeetingTime})} >Accept</button>:<button className='btn btn-success'onClick={e=>Accepted(id,x._id,{MeetingTime})} disabled>Accept</button>} </td>
                                          <td>
                                          <div class="btn btn-danger" onClick={e=>Rejected(id,x._id)}>Reject</div>
                                          </td>
                                      
                                          </tr>:       x.State=="Accepted"?
                                          <tr>
                                          <td>
                                              <div class="d-flex align-items-center">
                                            
                                                  <p class="font-weight-bold">{x.firstname} {x.lastname}</p>
                                              </div>
                                          </td>
                                          <td>{x.email}</td>
                                          
                                          <td><a href={`/resumes/${x.resume}`} download  ><img src="assets/pdf.png" width="50px" height="50px" /></a>
</td>                                     <td>   <p class="font-weight-bold">{x.MeetingTime}</p></td>
<td>
                                          <div class="btn btn-success" onClick={e=>AcceptedJob(id,x._id)}>Accepted For the job</div> </td>
                                          <td>             <div class="btn btn-danger" onClick={e=>RejectedJob(id,x._id)}>refused for the job</div>
                                          </td>
                                      
                                          </tr>:     x.State=="AcceptedForJob"?
                                          <tr>
                                          <td>
                                              <div class="d-flex align-items-center">
                                            
                                                  <p class="font-weight-bold">{x.firstname} {x.lastname}</p>
                                              </div>
                                          </td>
                                          <td>{x.email}</td>
                                          
                                          <td> <a href={`/resumes/${x.resume}`} download ><img src="assets/pdf.png" width="50px" height="50px" /></a>
</td>                                     <td>   <p class="font-weight-bold">{x.MeetingTime}</p></td>
<td>   <p class="font-weight-bold">Accepted For The Job</p></td>                                          
                                      
                                          </tr>:null
                                )}
                  
                            </tbody>
                        </table>
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
ShowDetails.propTypes = {
    getoffre: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  offre: state.offre,
});
  
export default connect(mapStateToProps, { AcceptedJob,RejectedJob,getoffre,Accepted,Rejected})(ShowDetails);