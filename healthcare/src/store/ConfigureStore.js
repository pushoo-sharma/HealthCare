




import { createStore } from 'redux';
import FormReducer from '../Reducers/FormReducer';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import formSubmitSaga from '../saga/FormSubmitSaga'

export default function configureStore() {
	 const initialState = {};
	 const sagaMiddleware = createSagaMiddleware();
	const store = createStore(FormReducer, initialState, applyMiddleware(sagaMiddleware));
     sagaMiddleware.run(formSubmitSaga);
  //  const store =createStore(FormReducer);
	return store;
}