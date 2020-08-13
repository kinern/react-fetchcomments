import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({comment: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.saveComment(this.state.comment);

        this.setState({comment: ''});
    }


    handleFetch = event => {
        event.preventDefault();
        this.props.fetchComments();
    }


    render() { 
        return ( 
        <div className="comment-box container">
            <form onSubmit={this.handleSubmit} className="form">
                <div className="form-group">
                    <h4>Enter A Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} className="form-control" name="comment"></textarea>
                </div>

                <div class="btn-group" role="group" aria-label="button group">
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                    <button type="button" onClick={this.handleFetch} className="fetch-comments btn btn-outline-info">Fetch Comments</button>
                </div>
                </form>
        </div> 
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));