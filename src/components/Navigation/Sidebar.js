import React from 'react';
import './assets/Sidebar.css';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: true
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleOpen(e){
    this.setState({open:true});
    document.getElementById("sub-nav").style.transition = "transform .3s ease-in"
    document.getElementById("sub-nav").style.transform = "translateX(0)"
  }

  handleClose(e){
    this.setState({open:false});
    document.getElementById("sub-nav").style.transition = "transform .3s ease-in"
    document.getElementById("sub-nav").style.transform = "translateX(-25vw)"
  }

  render(){
    return (
      <div id="sub-nav">

      <div id="sub-nav-grid">
          <div className="sub-nav-button" id="">Page 1</div>
          <div className="sub-nav-button" id="">Page 2</div>
      </div>

{this.state.open
?  <i className="fa fa-arrow-left"
          onClick={this.handleClose}>
        </i>
: <i className="fa fa-arrow-right"
          onClick={this.handleOpen}>
        </i>
}

      </div>
    )
  }
}


export default Sidebar;
