import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth2126Saga from '../features/EmailAuth2126/redux/sagas';
import EmailAuth2125Saga from '../features/EmailAuth2125/redux/sagas';
import EmailAuth2124Saga from '../features/EmailAuth2124/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth2126Saga,
EmailAuth2125Saga,
EmailAuth2124Saga,
EmailAuthSaga,
    
  ]);
}