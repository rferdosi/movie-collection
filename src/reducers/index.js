import {combineReducers} from 'redux';

import user from './user';
import categories from './categories';

export default combineReducers({user, categories});
