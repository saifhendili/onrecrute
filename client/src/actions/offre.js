import axios from 'axios';
import { SetAlert } from './alert';

import {
  ACCEPTED_JOB,REJECTED_JOB, ACCEPTED,REJECTED,  ADD_OFFRE,GET_OFFRE,GET_OFFRES,EDIT_OFFRE,DELETE_OFFRE,ERROR_OFFRE
} from './Types';




export const addResume = (id,formData) => async (dispatch) => {
  const config = {
    headers: { 'content-type': 'multipart/form-data' }

  };
  try {
    const res = await axios.post(
      `/api/offre/postuler/${id}`,
      formData,
      config
    );

    dispatch(SetAlert('Resume Added', 'success'));
  } catch (err) {
    dispatch({
      type: ERROR_OFFRE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const addoffre = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/offre/`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_OFFRE,
        payload: res.data,
      });
      dispatch(SetAlert('Offre Added', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
        }
      dispatch({
        type: ERROR_OFFRE
    });
    }
  };

  export const getoffre = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/offre/${id}`,
      );
      dispatch({
        type: GET_OFFRE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const Accepted = (id,idCondidat,formData) => async (dispatch) => {

    try {
      const res = await axios.put(
        `/api/offre/Accepted/${id}/${idCondidat}`,formData
      );
      dispatch({
        type: ACCEPTED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const AcceptedJob = (id,idCondidat,formData) => async (dispatch) => {

    try {
      const res = await axios.put(
        `/api/offre/AcceptedForJob/${id}/${idCondidat}`,formData
      );
      dispatch({
        type: ACCEPTED_JOB,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  export const Rejected = (id,idCondidat) => async (dispatch) => {

    try {
      const res = await axios.put(
        `/api/offre/rejected/${id}/${idCondidat}`,
      );
      dispatch({
        type: REJECTED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const RejectedJob = (id,idCondidat) => async (dispatch) => {

    try {
      const res = await axios.put(
        `/api/offre/RejectedForJob/${id}/${idCondidat}`,
      );
      dispatch({
        type: REJECTED_JOB,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const getoffres = () => async (dispatch) => {

    try {
      const res = await axios.get(`/api/offre/`,
      );
      dispatch({
        type: GET_OFFRES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  export const deleteoffre = (id) => async (dispatch) => {
    try {
    const res=  await axios.delete(`/api/offre/${id}`);
  
      dispatch({
        type: DELETE_OFFRE,
        payload: res.data,
      });
      dispatch(SetAlert('Offre Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const editoffre = (id,formData) => async (dispatch) => {
    try {
   await axios.put(`/api/offre/${id}`, formData,);
  
      dispatch({
        type: EDIT_OFFRE,
      });
      dispatch(SetAlert('Offre Removed', 'success'));
      } catch (err) {
      dispatch({
        type: ERROR_OFFRE,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };