import React from 'react';
import Button from './../Button/Button.js';
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
  componentDidMount(){
    this.setState({  subNavDivs: [...document.getElementsByClassName("sub-nav-finder")]})
  }

  componentDidUpdate(previousProps){
    if(previousProps.match.url !== this.props.match.url){
      this.setState({ subNavDivs: [...document.getElementsByClassName("sub-nav-finder")]})
    }
  }

  handleOpen(e){
    this.setState({open:true});
    document.getElementById("sub-nav").style.transition = "width .3s ease-in";
    document.getElementById("sub-nav").style.width = "23vw";
    document.getElementById("sub-nav-grid").style.transition = "display .3s ease-in";
    document.getElementById("sub-nav-grid").style.display = "grid";
  }

  handleClose(e){
    this.setState({open:false});
    document.getElementById("sub-nav").style.transition = "width .3s ease-out";
    document.getElementById("sub-nav").style.width = "3vw";
    document.getElementById("sub-nav-grid").style.transition = "display .3s ease-out";
    document.getElementById("sub-nav-grid").style.display = "none";
  }

  render(){

    return (
      <div id="sub-nav">
          <div id="sub-nav-grid">
          {this.state.subNavDivs
            ?  this.state.subNavDivs.map(function(div_info,i){
                return  <div key={i} className="sub-nav-button" id={div_info.id}> <Button innerHTML={div_info.id} url={div_info.id} type="sub" styleType="light"/> </div>
                })

            : null
          }
          </div>

          {this.state.open
              ?  <i className="fa fa-arrow-left left" onClick={this.handleClose}/>
              : <i className="fa fa-arrow-right right" onClick={this.handleOpen}/ >
          }
      </div>
    )
  }
}


export default Sidebar;
