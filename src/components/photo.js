import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//layout class
class Photo extends Component
{
	shouldComponentUpdate(props,state)
	{
		let { post, comments } = this.props;
		let comment = comments[post.code] ? comments[post.code].length : 0;
		let nextcomment = props.comments[post.code] ? props.comments[post.code].length : 0;
		if(post.likes === props.post.likes && comment === nextcomment) return false;
		return true;
	}

	componentWillUpdate(props, state)
	{
		if(this.props.post.likes !== props.post.likes) this.hearts.classList.add("active");

	}
	componentDidUpdate()
	{
		if(this.hearts.classList.contains("active"))
		{
			setTimeout(()=> {
				this.hearts.classList.remove("active");
			},1000)
		}
		console.log("update");

	}
	render()
	{
		let { post, i, comments } = this.props;
		return (
			<div className ="photo">
				<figure>
					<div className="hearts" ref={(node)=>{this.hearts = node}}><span>&hearts; {post.likes}</span></div>
					<Link to={`/view/${post.code}`} className="img-link">
						<img src={post.display_src} alt={post.caption} title={post.caption} />
					</Link>
					<figcaption>
						<p>{post.caption.substr(0,30)}...</p>
						    <div className="control-buttons">
				            <button onClick={this.props.increment.bind(null,i)} className="likes btn">&hearts; {post.likes}</button>
				            <Link to={`/view/${post.code}`} className="button btn">
				              <span className="comment-count">
				                <span className="speech-bubble"></span> {(comments[post.code] ? comments[post.code].length : 0)}
				              </span>
				            </Link>
				          </div>
					</figcaption>
				</figure>
			</div>
			)
	}
}
export default Photo;