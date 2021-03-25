import React from 'react';
import {Link} from 'react-router-dom';
import './assets/Button.css';


class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      innerHTML: props.innerHTML,
      url: props.url,
      type: props.type,
      styleType: props.styleType
    };

  this.handleClick = this.handleClick.bind(this);
}

componentDidUpdate(previousProps) {
  if(this.props.innerHTML != previousProps.innerHTML){
    this.setState({innerHTML: this.props.innerHTML})
  }
}

handleClick() {
  let div = document.getElementsByClassName("sub-nav-finder")[this.state.url];
  if(div){
      div.scrollIntoView({behavior: "smooth", inline:"end"});
  }
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
//Trying to make an underline on active page
//     if(window.location.pathname === '/'+ this.state.url){
//       console.log(window.location.pathname + "==" + this.state.innerHTML)
//       let additionalStyle = {textDecoration: 'underline solid !important', transition: 'none'};
// console.log(additionalStyle)
//       myStyle = {...myStyle, ...additionalStyle}
    console.log(myStyle)
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
