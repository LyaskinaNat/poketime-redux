import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';


class Post extends Component {
    //we set the initial state of post property to null but when we fetch a specific post from api 
    //we update the state.post with that data and output in in JSX
    state = {
        post: null
    }
    //we will be using ComponentDidMount hook againt to first fetch post id and then
    //go and fetch a content of a specific post based on the id we received/fecthed
    //as this component is being used as a Route it now has props like history, listerner, match to our Post component we will use
    //them as props here to grab the id of a specific post like so: this.props.match.params.post_id
    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })

            })
    }
    render() {
        const { post } = this.state;
        const aPost = post ? (
            <div className="post">
                <div >
                    <h4 className="center" style={{ color: '#039be5' }}>{post.title}</h4>
                    <p className="container" style={{ padding: + 1 + "em" }}>{post.body}</p>
                    <div className="center">
                    </div>

                </div>
            </div>
        ) : (
                <div className="center">
                    <h2 className="center">Loading posts ...</h2>
                </div>
            )

        return (
            
           
            <div className="container mypost">
                <div className="card-content grey darken-3">{aPost}
                
                </div>
                <div className="center">
                <Link to={ "/" }>
                    <button className="waves-effect light-blue darken-1 btn" style={{ margin: + 1 + "em" }} >Back to Posts</button>
                </Link>    
                </div>
            </div>
           
        )
    }

}


export default Post