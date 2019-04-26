import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
//some routs may have a dinamic parameter, e.d. the component which displays individual
//post details will have a url with a post_id parameter and depending on what post
//user chose to view, the component will fetch the post datat base on the post url which includes post id
// to set up a router with dinamically changed part of url we use semi colunms and variable:
// <Route path='/:post_id' component={ Post } />
//We using <Switch> tag to only match one component url at a time

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/posts/:post_id' component={ Post } />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}


export default App;
