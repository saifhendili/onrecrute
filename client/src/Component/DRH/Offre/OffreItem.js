import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteoffre } from '../../../actions/offre';

function OffreItem({deleteoffre, x: { _id,Title,Description,Address,Type}}) {

    return (
        <tr>
    <td>
        <div class="d-flex align-items-center">
      
            <p class="font-weight-bold">{Title}</p>
        </div>
    </td>
    <td>{Description}</td>
    <td>{Address}</td>
    <td>{Type}</td>
    <td>   <Link to={`/myoffre?id=${_id}`} ><button class="btn btn-primary">Visité</button></Link></td>
    <td>
   <Link to={`/EditOffre?id=${_id}`} ><div class="btn btn-secondary">Modifié</div></Link>
    </td>
    <td>
       <button onClick={(e)=>deleteoffre(_id)} class="btn btn-danger">Supprimé</button>
    
       </td>
    </tr>
      )
}


  export default connect(null, {deleteoffre})(OffreItem);