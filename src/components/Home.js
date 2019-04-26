import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import Citation from '../resources/images/Citation_Icon.png';
//we need to connect our component to the Store so it can interact with the state 
//and get data from the state
import { connect } from 'react-redux';
class Home extends Component {
    
    render() {
        
        const { posts } = this.props;
        const postList = posts.length ? (

        posts.map(post => {
            return (
                <div className=" post card grey darken-3" key={ post.id }>
                <Link to={ "/posts/" + post.id }>
                <img className="all" src={ Citation } alt="" />
                </Link>
                    <div className="card-content">
                    <Link to={ "/posts/" + post.id }>
                        <span className="card-title">{ post.title }</span>
                        </Link>
                        <p>{ post.body }</p>
                        
                    </div>
                </div>
            )
        })

        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                { postList }
            </div>

        )
    }
}
//connecting Home to our Redux store:
//we also need data from the store. 
//We grab the data we need and map it to the props of our component
//we do so using mapStateToProps function like so

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
//we pass mapStateToProps to connect function so
//when we connect to Redux, it knows what data we need (state to props) 
//and the property we what to create on that object is posts: 
export default connect(mapStateToProps)(Home)