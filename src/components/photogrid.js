import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import Photo from './photo';
//layout class
class Photogrid extends Component
{
	render()
	{
		return (
			<section className ="photo-grid">
				{this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</section>
			)
	}
}

function mapStateToProps(store)
{
    return {
        posts:store.posts
    }
}
export default connect(mapStateToProps)(Photogrid);