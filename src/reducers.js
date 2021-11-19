import { combineReducers } from 'redux';

import componentReducer from '~components/Component/reducers';

export default combineReducers({
    component: componentReducer,
});
