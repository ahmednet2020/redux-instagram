import React, { Component, cloneElement } from 'react';
//react-router-dom components
import { Link } from 'react-router-dom';
//action
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions/actionCreators';
//layout class
class Main extends Component
{
	render()
	{
		return (
			<div className ="main">
				<header>
					<h1>
						<Link to="/">reduxinstagram</Link>
					</h1>
				</header>
				{cloneElement(this.props.children,this.props)}
			</div>
			)
	}
}

function mapStateToProps(store)
{
    return {
        posts:store.posts,
        comments:store.comments
    }
}

function dispatchToProps(dispatch)
{
    return bindActionCreators(action,dispatch);
}
export default  connect(mapStateToProps, dispatchToProps)(Main);