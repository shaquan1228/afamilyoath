import React from 'react';
import './assets/Sidebar.css';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

  }


  render(){
    return (
      <div id="sub-nav">

          <div className="sub-nav-button" id="">Page 1</div>
          <div className="sub-nav-button" id="">Page 2</div>

      </div>
    )
  }
}


export default Sidebar;
