import React, { Component } from "react";
import {connect} from 'react-redux';
import { deletePost } from '../actions/postActions';

class PostDetail extends Component {
    handleClick = () => {
        console.log(this.props.post);
        this.props.deletePost(this.props.post.id);
        this.props.navigate("/");
    }
    render() { 
        
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        post: state.reducer.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("inside");
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)