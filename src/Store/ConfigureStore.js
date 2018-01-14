import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/RootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
