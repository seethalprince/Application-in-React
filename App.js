//import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
import Result from './result';
import './App.css';
import Form from './Form'
class App extends Component
{
  constructor (props) 
  {
      super(props)
      this.state = {
          Name: '',
          Age: '',
          HR: ''
      }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange (event)
  {
      this.setState({[event.target.name] : event.target.value});
     // this.setState( {HR: event.target.value} );
      console.log(this.state.HR)
      //console.log(event.target.Name)
              
  }
  handleSubmit(event) {
      
      alert('Hai  '+ this.state.Name    + ' Your Heart Rate is  ' + this.state.HR +'  Click OK then submit ');
      //console.log(event);
      event.preventDefault();
      /*if(Hr>=1011 && Hr<=120)
         alert("Bad health")
      else if (Hr>=81 && Hr<=100)
         alert("Carefull health")
      else
          alert("Strange")*/

  }
  render() 
  { 
    

    return (
    <Router>
      <div>
        <h1>HAPS</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/result'} className="nav-link"> Submit </Link></li>
        </ul>
        </nav>
      <hr />
    <Switch>
    <Route exact path='/' 
      render ={(props)=> 
        <Form  
          handleSubmit ={this.handleSubmit}
          handleChange ={this.handleChange}
          
          />
      }
    />
    <Route  path='/result' 
      render ={(props)=> 
        <Result  
          values={this.state.HR}
          />
      }
    />
      
        
    </Switch>
      </div>
    </Router>
  );
  }
}
export default App;
