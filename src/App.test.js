import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//reducers test function
import posts from './reducers/posts';
import comments from './reducers/comments';
//action creators
import * as action from './actions/actionCreators';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("INCREMENT_LIKES", () => {
	it("shoude return new state with new number of likes", ()=> {
		const postsData = [{
					      "code":"BAcyDyQwcXX",
					      "caption":"Lunch #hamont",
					      "likes":56,
					      "id":"1161022966406956503",
					      "display_src":"https://c1.staticflickr.com/3/2365/2385191991_53e2ed8af9_z.jpg"
					   }];
		const after = [{
					      "code":"BAcyDyQwcXX",
					      "caption":"Lunch #hamont",
					      "likes":57,
					      "id":"1161022966406956503",
					      "display_src":"https://c1.staticflickr.com/3/2365/2385191991_53e2ed8af9_z.jpg"
					   }];
		expect(posts(postsData,action.increment(0))).toEqual(after);
	});
});