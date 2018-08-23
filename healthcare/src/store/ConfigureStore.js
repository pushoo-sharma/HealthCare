




import { createStore } from 'redux';
import RootReducer from '../Reducers/RootReducer';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../saga/RootSaga'

export default function configureStore() {
	 const initialState = {};
	 const sagaMiddleware = createSagaMiddleware();
	const store = createStore(RootReducer, initialState, applyMiddleware(sagaMiddleware));
     sagaMiddleware.run(RootSaga);
  //  const store =createStore(FormReducer);
	return store;
}