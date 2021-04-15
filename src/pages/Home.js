import React from 'react';
import './assets/home.css';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [


        "https://i.pinimg.com/originals/2e/36/ca/2e36ca132a4d2c082bb882f6ab7f1eac.png",

        "https://cdn.shopify.com/s/files/1/0555/9114/1569/products/81F4D53A-C196-4108-B892-1DB670729392_1_105_c.jpg?v=1616378714",
        "https://cdn.shopify.com/s/files/1/0555/9114/1569/products/0D19774F-C7B5-4FC5-ADAC-BB5FEBE9FC1E_1_105_c.jpg?v=1616378499",
        "https://cdn.shopify.com/s/files/1/0555/9114/1569/products/81F4D53A-C196-4108-B892-1DB670729392_1_105_c.jpg?v=1616378714",
        "https://cdn.shopify.com/s/files/1/0555/9114/1569/products/03D98115-6F1C-4C70-B4C7-9075C536FECC_1_105_c.jpg?v=1616378178"
      ]
    }

  }

  componentDidMount() {


  }

  render() {
    return (
      <div className="business-logic-right" id="home">


        <div id="circle-1" className="circle">  </div>


        <div id="circle-6" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[3] + ')' }}> </div>
        <div id="circle-7" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[4] + ')' }}> </div>
        <div id="circle-8" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[5] + ')' }}> </div>
        <div id="circle-9" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[6] + ')' }}> </div>

        <div id="circle-2" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[0] + ')' }}></div>

        <div id="circle-3" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[0] + ')' }}> </div>
        <div id="circle-4" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[1] + ')' }}> </div>
        <div id="circle-5" className="circle" style={{ backgroundImage: 'url(' + this.state.imgList[2] + ')' }}> </div>
        <div id="circle-10" className="circle"> </div>

      </div>
    )
  }
}


export default Home;
