import {
  ACCEPTED_JOB,REJECTED_JOB,GET_MYUSER,ACCEPTED,REJECTED, ADD_OFFRE,GET_OFFRE,GET_OFFRES,EDIT_OFFRE,DELETE_OFFRE,ERROR_OFFRE
} from '../actions/Types';
 
  const initialState = {
    loading: true,
    loadingCondidat: true,
    offres: [],
    condidat: [],
    offre: null,
    error: {},
user:null,
loadingUser: true,

  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_MYUSER:
        return {
          ...state,
          user: payload,
          loadingUser: false,

        };
      case ACCEPTED :
        return {
            ...state,
            offre: payload,
            loadingCondidat: false,
        };
        case ACCEPTED_JOB :
          return {
              ...state,
              offre: payload,
              loadingCondidat: false,
          };
        case REJECTED :
          return {
              ...state,
              offre: payload,
              loadingCondidat: false,
          };

          case REJECTED_JOB :
            return {
                ...state,
                offre: payload,
                loadingCondidat: false,
            };
            case GET_OFFRES :
              return {
                  ...state,
                  offres: payload,
                  loading: false,
              };
        case GET_OFFRE :
            return {
                ...state,
                offre: payload,
                loading: false,
            };
      case ADD_OFFRE:
            return {
                ...state,
                offre: payload,
                loading: false,
            };
            case DELETE_OFFRE:
                return {
                  ...state,
                  offres: payload,
                  
                  loading: false,
                };
              case ERROR_OFFRE:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
                default:
                    return state;
    }
  }