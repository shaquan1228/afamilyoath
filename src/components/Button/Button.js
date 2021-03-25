import React from 'react';
import {Link} from 'react-router-dom';
import './assets/Button.css';

//TODO: @Carlos complete this
class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      innerHTML: props.innerHTML,
      url: props.url,
      type: props.type,
      styleType: props.styleType
    };
  }

  render(){
    let myStyle = {};
    if (this.state.styleType === "light") {
      myStyle = {
        color: "black",
        background: "white"
      }
    } else if (this.state.styleType === "dark") {
      myStyle = {
        color: "white",
        background: "black"
      }
    } else {
      console.log("Invalid style");
    }

    return (
       this.state.type==="main"
        ?       <div
                  className='button'
                  onClick={this.handleClick}
                  style={myStyle}>
                    <Link to={this.state.url}>{this.state.innerHTML}</Link>

              </div>
        :       <div
                  className='button'
                  onClick={this.handleClick}
                  style={myStyle}>
                    {this.state.innerHTML}

              </div>


    )
  }
}


export default Button;
