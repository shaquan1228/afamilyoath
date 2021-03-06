import React from 'react';
import Button from './../Button/Button.js';
import { getCollections } from './../../apis/shopify.js';
import './assets/Sidebar.css';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      subNavDivs: [...document.getElementsByClassName("sub-nav-finder")]
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    if (this.props.match.url === "/shop") {
      getCollections().then(response => {
        let categories = []
        response.reverse().forEach(function (item) { categories.push({ id: item.title }) })
        this.setState({ subNavDivs: categories })
      })
    } else {
      this.setState({ subNavDivs: [...document.getElementsByClassName("sub-nav-finder")] })
    }

    if(window.innerWidth<750 && this.state.open){ this.handleClose()}
  }

  componentDidUpdate(previousProps) {
    let ids = document.getElementsByClassName("sub-nav-finder")
    if (previousProps.match.url !== this.props.match.url && this.props.match.url !== "/shop") {
      this.setState({ subNavDivs: [...ids] });
    } else if (previousProps.match.url !== this.props.match.url && this.props.match.url === "/shop") {
      getCollections().then(response => {
        let categories = []
        response.reverse().forEach(function (item) { categories.push({ id: item.title }) })
        this.setState({ subNavDivs: categories })
      })
    }

    if(window.innerWidth<750 && this.state.open){ this.handleClose()}
  }


  handleOpen(e) {
    this.setState({ open: true });
    document.getElementById("sub-nav").style.transition = "width .3s ease-in";
    document.getElementById("sub-nav").style.width = "23vw";
    document.getElementById("sub-nav-grid").style.transition = "display .3s ease-in";
    document.getElementById("sub-nav-grid").style.display = "grid";
  }

  handleClose(e) {
    this.setState({ open: false });
    document.getElementById("sub-nav").style.transition = "width .3s ease-out";
    document.getElementById("sub-nav").style.width = "3vw";
    document.getElementById("sub-nav-grid").style.transition = "display .3s ease-out";
    document.getElementById("sub-nav-grid").style.display = "none";
  }

  render() {
    return (
      <div id="sub-nav">
        <div id="sub-nav-grid">
          {this.state.subNavDivs
            ? this.state.subNavDivs.map(function (div_info, i) {
              return (
                <div key={i} className="sub-nav-button" id={div_info.id}>
                  <Button innerHTML={div_info.id} url={div_info.id} type="sub" styleType="light" />
                </div>
              )
            })

            : null
          }
        </div>

{/*
        {this.state.open &&  window.innerWidth<750
          ? <i className="fa fa-arrow-left left" onClick={this.handleClose} />
          : <i className="fa fa-arrow-right right" onClick={this.handleOpen} />
        }
*/}
        {this.state.open && window.innerWidth>750 && 
            <i className="fa fa-arrow-left left" onClick={this.handleClose} />
        }

        {!this.state.open && window.innerWidth>750 && 
            <i className="fa fa-arrow-right right" onClick={this.handleOpen} />
        }
      </div>
    )
  }

}


export default Sidebar;
