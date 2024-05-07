const initialState = {
    loading: false,
    error: null
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'SUBMIT_FORM_SUCCESS':
        return {
          ...state,
          loading: false
        };
      case 'SUBMIT_FORM_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default reducers;
  