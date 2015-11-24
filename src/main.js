import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link} from 'react-router';
class Home extends React.Component {
  render(){
    return (
      <div>this is a home page <Link to="/about">test</Link></div>

    );
  }
}

class About extends React.Component{
  render(){
    return(
      <div>
         hi it's a about page
         <Link to="/">go to home page</Link>
      </div>
    );
  }
}

var r = (
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
  </Router>
);

ReactDom.render(r,document.getElementById('app'));
