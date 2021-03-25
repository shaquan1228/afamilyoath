import React from 'react';

import './assets/InfoSquare.css';



class InfoSquare extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      img: props.img,
      innerHTML: props.innerHTML,
      style: props.style // img_left, img_right
    }
  }
  render(){
    return(
      <div id={this.state.title} className="sub-nav-finder">
        {
          this.state.img &&
          this.state.style === 'img_right' &&
          <div className='wrapper_img_right'>
            <div className='text_left'>
              <h1>{this.state.title}</h1>
              <p>{this.state.innerHTML}</p>
            </div>
            <div className='image_right'>
              <img className="infosquare-image" src={this.state.img} alt="This is my image"/>
            </div>
          </div>
        }
        {
          this.state.img &&
          this.state.style === 'img_left' &&
          <div className='wrapper_img_left'>
            <div className='image_left'>
              <img className="infosquare-image" src={this.state.img} alt="This is my image"/>
            </div>
            <div className='text_right'>
              <h1>{this.state.title}</h1>
              <p>{this.state.innerHTML}</p>
            </div>
          </div>
        }
        {
          !this.state.img &&
          <div className='wrapper_null_img'>
            <div className='text_right'>
              <h1>{this.state.title}</h1>
              <p>{this.state.innerHTML}</p>
            </div>
          </div>
        }

      </div>
    )
  }
}


export default InfoSquare;
