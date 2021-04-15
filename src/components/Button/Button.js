import React from 'react';
import { Link } from 'react-router-dom';
import './assets/Button.css';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }



  handleClick() {

    let div = document.getElementsByClassName("sub-nav-finder")[this.props.url];
    if (div) {
      div.scrollIntoView({ behavior: "smooth", inline: "end" });
    }
  }


  //TODO: Make an underline on active page
  setStyle() {
    let myStyle = {};
    if (this.props.styleType === "light") {
      myStyle = {
        color: "black",
        background: "white"
      }
    } else if (this.props.styleType === "dark") {
      myStyle = {
        color: "white",
        background: "black"
      }
    }
    return myStyle;
  }

  render() {
    let myStyle = this.setStyle();
    if (this.props.type === "main") {
      return (
        <div className='button' style={myStyle}>
          <Link to={'/' + this.props.url}>{this.props.innerHTML}</Link>
        </div>
      )
    } else if (this.props.type === "sub") {
      return (
        <div className='button' onClick={this.handleClick} style={myStyle}>
          {this.props.innerHTML}
        </div>
      )
    } else if (this.props.type === "submit") {
      return (
        <input className='button' style={myStyle} type="submit" value={this.props.innerHTML} />
      )
    } else {
      return (
        <div className='button' style={myStyle}>
          {this.props.innerHTML}
        </div>
      )
    }


  }
}


export default Button;
