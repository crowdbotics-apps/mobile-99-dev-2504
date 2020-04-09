import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth2126Reducer from '../features/EmailAuth2126/redux/reducers';
import EmailAuth2124Reducer from '../features/EmailAuth2124/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth2126: EmailAuth2126Reducer,
EmailAuth2124: EmailAuth2124Reducer,
EmailAuth: EmailAuthReducer,

});