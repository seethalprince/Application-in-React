import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Form extends React.Component {
  
    //status(hr){
       // if(hr>=91 && hr<=100)
         //   return("Bad health")
   // }
   
    render () 
    {
    return (
    <section id="input data">
        <header>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </header>
        <form id="details" onSubmit={this.handleSubmit}>
          <p id="ctext">Check you heart status</p>
       <h2>Healthy Or NoT</h2>
         <p>Name:
             <input type="text" name="Name" placeholder="Name" onChange={this.props.handleChange}/>
        </p>
        <p>Age:
            <input type="number" name="Age" placeholder="Age" />
        </p>
        <p>HR:
            <input type="number" name="HR" placeholder="HR"  onChange={this.props.handleChange}/>
        </p>
           
        <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>
            Continue
        </button>
    </form>
    </section>
       );
}
}
ReactDOM.render(
    <Form />,
    document.getElementById('root')
  );
export default Form;

