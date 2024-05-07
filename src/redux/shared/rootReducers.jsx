import { combineReducers } from 'redux';
import reducers from '../reducers';



const rootReducer = combineReducers({
  form: reducers,
 
});

export default rootReducer;