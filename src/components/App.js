import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import 'css/styles.css';

class App extends Component {

    renderButton(){
        if (this.props.auth) {
            return (
                <div 
                onClick={()=>{this.props.changeAuth(false)}}
                className="btn-signin">
                    Sign Out
                </div>
            );
        } else {
            return (
                <div
                onClick={()=>{this.props.changeAuth(true)}} 
                className="btn-signin">
                    Sign In
                </div>
            );
        }
    }

    renderHeader(){
        return (
            <nav className="">
                <ul className="">
                    <li className="list-inline-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/post">Post Comment</Link>
                    </li>
                    <li className="list-inline-item">
                        {this.renderButton()}
                    </li>
                </ul>
            </nav>
        );
    }

    render(){
        return (
            <div className="fluid-container">
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route exact path="/" component={CommentList} />
            </div>
        );
    };
}

function mapStateToProps(state){
    return {auth: state.auth};
}

export default connect(mapStateToProps, actions)(App);