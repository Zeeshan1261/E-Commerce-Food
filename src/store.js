import {createStore} from 'redux';
import rootred from '../src/Components/redux/reducers/main'
const store = createStore(
        rootred
)
export default store;