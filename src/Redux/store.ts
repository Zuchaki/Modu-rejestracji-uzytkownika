import {createStore, Store} from 'redux'
import rootReducer from './rootReducer'
import { RootActions, RootState } from './rootReducer';

let store:Store<RootState, RootActions> = createStore(rootReducer)

export default store;