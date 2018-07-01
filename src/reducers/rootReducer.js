import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';

// const combineReducers = (obj) => (state,action) => Object.keys(obj).reduce((nextstate,key)=>{
// 	nextstate[key]=obj[key](state[key],action);
// 	return nextstate;
// },{});
const rootReducer = combineReducers({ posts, comments});
export default rootReducer;