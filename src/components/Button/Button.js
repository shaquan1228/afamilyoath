import React from 'react';
import {Link} from 'react-router-dom';
import './assets/Button.css';

//TODO: @Carlos complete this
class Button extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      innerHTML: props.innerHTML,
      url: props.url,
      type: props.type,
      styleType: props.styleType
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverExit = this.handleHoverExit.bind(this);
  }

  componentDidMount() {
    console.log();
  }

  handleClick() {
    //TODO: takes you to the URL generated
    console.log('CLICK');
  }

  handleHover(e) {
    //TODO: tranistion to being underlined
    e.target.style.transition = "text-decoration .05s ease-in";
    e.target.style.textDecoration = "underline solid";
  }

  handleHoverExit(e) {
    e.target.style.transition = "text-decoration .05s ease-out";
    e.target.style.textDecoration = "underline transparent";
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
                  onMouseOver={this.handleHover}
                  onMouseLeave={this.handleHoverExit}
                  style={myStyle}>
                    <Link to={this.state.url}>{this.state.innerHTML}</Link>

              </div>
        :       <div
                  className='button'
                  onClick={this.handleClick}
                  onMouseOver={this.handleHover}
                  onMouseLeave={this.handleHoverExit}
                  style={myStyle}>
                    {this.state.innerHTML}

              </div>


    )
  }
}


export default Button;
