import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import Photo from './photo';
import Comments from './comments';
//layout class
class Single extends Component
{
	render()
	{
		let { photoid } = this.props.match.params;
		let i = this.props.posts.findIndex((post)=> post.code === photoid );
		return (
			<section className ="single">
				<h1>{this.props.posts[i].caption}</h1>
				<Photo i={i} post={this.props.posts[i]} {...this.props}/>
				<Comments postId={photoid} {...this.props}/>
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
export default connect(mapStateToProps)(Single);