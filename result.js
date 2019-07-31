import React from 'react';
//import App from './App'
class result extends React.Component
{
  status()
  {
    var Hr=parseInt(this.props.values);
    console.log(this.props.values);
    if(Hr>=91 && Hr<=100)
      return("Your Heart Health Is Bad. Take care of your health")
    else if(Hr>=81 && Hr<=90)
      return("Good")
    else if(Hr>=71 && Hr<=80)
      return("Normal. You Are Healthy")
    else if(Hr>=61 && Hr<=70)
      return("May be")
    else if(Hr>=51&& Hr<=60)
      return("May be. Consult a Dr.")
    else if(Hr>=41 && Hr<=50)
      return("Poor. Take care of your health")
    else if(Hr=0 & Hr<=40)
      return(".....")
    else
      return("Strange ..!!");

  }
    render()
    {
        
        
        return (
            //<Form/>
           
          <div>
            <h1>{this.status()}</h1>
          </div>
          
        );

    }
}export default result;