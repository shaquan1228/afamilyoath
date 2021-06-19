import React from 'react';
import ReactGA from 'react-ga';
import MailSignup from './../components/MailSignup/MailSignup.js';
import './assets/home.css';



class Home extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(props.location.pathname);

    this.state = {
      imgList: [
        "assets/afo1.png",
        "assets/afo2.png",
        "assets/afo3.png",
        "assets/afo4.png",
        "assets/afo5.png",
        "assets/afo6.png"
      ]
    }

  }

  componentDidMount() {


  }

  render() {
    return (
      <div className="business-logic-right" id="home">


        <div id="circle-1" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[5] + ')' }}>  </div>

        <div id="circle-6" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[3] + ')' }}> </div>
        <div id="circle-7" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[4] + ')' }}> </div>
        <div id="circle-8" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[1] + ')' }}> </div>
        <div id="circle-9" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[5] + ')' }}> </div>

        <div id="circle-2" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[3] + ')' }}></div>

        <div id="circle-3" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[2] + ')' }}> </div>
        <div id="circle-4" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[0] + ')' }}> </div>
        <div id="circle-5" className="circle" onClick={()=>{this.props.history.push("./shop")}} style={{ backgroundImage: 'url(' + this.state.imgList[0] + ')' }}> </div>
        <div id="circle-10" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[1] + ')' }}> </div>
        <div id="mail-form">
          <MailSignup/>
        </div>
      </div>
    )
  }
}


export default Home;
