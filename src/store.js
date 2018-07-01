import { createStore,compose} from 'redux';
import rootReducer from './reducers/rootReducer';
//data
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments
};
const devTool = (f) => window.__REDUX_DEVTOOLS_EXTENSION__? window.__REDUX_DEVTOOLS_EXTENSION__ : f;
const enhancers = compose(devTool);
const store = createStore(rootReducer,defaultState, enhancers);
export default store;

