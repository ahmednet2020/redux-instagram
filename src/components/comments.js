import React, { Component } from 'react';
//layout class
class Comments extends Component
{
	renderComment(comment, i)
	{
		return (
			<li key={i}>
				<p><b>{comment.user}:</b>{comment.text}</p>
				<button onClick={this.props.removeComment.bind(this,this.props.postId, i)}>&times;</button>
			</li>
			)
	}
	handleSubmit = (e) => {
	    e.preventDefault();
	    if(this.refs.author.value === "" || this.refs.comment.value === "") return false;
	    this.props.addComment(this.props.postId, this.refs.author.value, this.refs.comment.value);
	    this.refs.commentForm.reset();
  	}
	render()
	{
		let comments =  this.props.comments[this.props.postId] || [];
		return (
			<div className="comments">
				<ul>
				{comments.map(this.renderComment.bind(this))}
				</ul>
				<form onSubmit={this.handleSubmit} ref="commentForm" className="comment-form">
		          <input type="text" ref="author" placeholder="author"/>
		          <input type="text" ref="comment" placeholder="comment"/>
		          <input type="submit" value="add"/>
		        </form>
			</div>
			)
	}
}
export default Comments;