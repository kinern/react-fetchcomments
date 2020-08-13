import React, {Component} from 'react';
import {connect} from 'react-redux';



class CommentList extends Component {
    state = {  }

    renderComments = () => {
        console.log(this.props.comments);
        return this.props.comments.map(comment =>{
            return <li key={comment}>{comment}</li>;
        });
    }

    render() { 
        return ( 
        <div className="comment-list container">
            <h4>List Of Comments</h4>
            <hr />
            <ul>
                {this.renderComments()}
            </ul>
        </div> 
        );
    }
}

function mapStateToProps (state) {
    return {comments: state.comments};
}
 
export default connect(mapStateToProps)(CommentList);