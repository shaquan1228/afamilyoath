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
  this.setStyle = this.setStyle.bind(this);
}

componentDidUpdate(previousProps) {
  if(this.props.innerHTML != previousProps.innerHTML){
    this.setState({innerHTML: this.props.innerHTML})
  }
}

handleClick() {
console.log("Erer")
  let div = document.getElementsByClassName("sub-nav-finder")[this.state.url];
  if(div){
      div.scrollIntoView({behavior: "smooth", inline:"end"});
  }
}


setStyle(){
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
  return myStyle;
}
  render(){
      let myStyle = this.setStyle();
//Trying to make an underline on active page
//     if(window.location.pathname === '/'+ this.state.url){
//       console.log(window.location.pathname + "==" + this.state.innerHTML)
//       let additionalStyle = {textDecoration: 'underline solid !important', transition: 'none'};
// console.log(additionalStyle)
//       myStyle = {...myStyle, ...additionalStyle}
      if(this.state.type==="main"){
            return (
                    <div
                          className='button'
                          style={myStyle}>
                            <Link to={'/'+this.state.url}>{this.state.innerHTML}</Link>
                    </div>
          )
      }else if(this.state.type==="sub"){
            return(
                <div
                       className='button'
                       onClick={this.handleClick}
                       style={myStyle}>
                         {this.state.innerHTML}

                   </div>
            )
      }else{
        return(
          <div
                 className='button'
                 style={myStyle}>
                   {this.state.innerHTML}

             </div>
        )
      }


  }
}


export default Button;
