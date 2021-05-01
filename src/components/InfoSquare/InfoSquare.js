import React from 'react';

import './assets/InfoSquare.css';



class InfoSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div id={this.props.title} className="sub-nav-finder">
        {
          this.props.img &&
          this.props.myStyle === 'img_right' &&
          <div className='wrapper_img_right'>

            <div className='image_right'>
              <img className="infosquare-image" src={this.props.img} alt="This is my infoImg" />
            </div>
            <div className='text_left'>
              <h1 style={{textAlign:'left'}}>{this.props.title}</h1>
              {
                this.props.innerHTML.map((row,index )=> {
                  if(index>1 && index <13){return <p key={row+index} className="poem"> {row}</p>}
                  return <p>{row}</p>
                })
              }
            </div>

          </div>
        }
        {
          this.props.img &&
          this.props.myStyle === 'img_left' &&
          <div className='wrapper_img_left'>
            <div className='image_left'>
              <img className="infosquare-image" src={this.props.img} alt="This is my infoImg" />
            </div>
            <div className='text_right'>
              <h1>{this.props.title}</h1>
              {
                this.props.innerHTML.map( (row,index) => {
                  return <p key={row+index}>{row}</p>
                })
              }
            </div>
          </div>
        }
        {
          !this.props.img &&
          <div className='wrapper_null_img'>
            <div className='text_right'>
              <h1>{this.props.title}</h1>
              {
                this.props.innerHTML.map((row,index) => {
                  return <p key={row+index}>{row}</p>
                })
              }
            </div>
          </div>
        }

      </div>
    )
  }
}


export default InfoSquare;
