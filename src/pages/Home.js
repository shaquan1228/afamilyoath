import React from 'react';
import './assets/home.css';



class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }
//TODO: @Carlos: add props to Home your buttons like on the pdf
  render(){
    return(
      <div className="business-logic-right" id="home">
          <div id="circle-1" className="circle"> </div>
          <div id="circle-2" className="circle"> </div>
          <div id="circle-3" className="circle"> </div>
          <div id="circle-4" className="circle"> </div>
          <div id="circle-5" className="circle"> </div>
          <div id="circle-6" className="circle"> </div>
          <div id="circle-7" className="circle"> </div>
          <div id="circle-8" className="circle"> </div>
          <div id="circle-9" className="circle"> </div>
          <div id="circle-10" className="circle"> </div>
      </div>
    )
  }
}


export default Home;
