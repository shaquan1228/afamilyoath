import React from 'react';
import Button from './../Button/Button.js';



class MailSignup extends React.Component{
  constructor(props){
    super(props);
    this.state = {status:"Subscribe to Newsletter"}
    
    this.submitSignup = this.submitSignup.bind(this);
    this.onType = this.onType.bind(this);
  }

  onType(e){
    (e.key === "Enter")
    ? this.submitSignup()
    : this.setState({ [e.target.name]: e.target.value })

  }
  submitSignup(e){
    let key = ""

    let url = "http://us1.api.mailchimp.com/2.0/lists/subscribe.json?apikey="+key+"&id=9b99b501b4&email[email]="+
    this.state.email+"&merge_vars[FNAME]="+this.state.fname+"&merge_vars[LNAME]="+this.state.lname+"&double_optin=true&send_welcome=false"
    if(!this.state.email){
      this.setState({status:"Please provide an email address before subscribing."});
      setTimeout(() => {
        this.setState({status:"Subscribe to Newsletter", lname: null, fname:null, email:null});
      },1500)
    }
    else if(!this.state.fname){
      this.setState({status:"Please provide a first name before subscribing."});
      setTimeout(() => {
        this.setState({status:"Subscribe to Newsletter", lname: null, fname:null, email:null});
      },1500)
    }
    else if(!this.state.lname){
      this.setState({status:"Please provide a last name before subscribing."});
      setTimeout(() => {
        this.setState({status:"Subscribe to Newsletter", lname: null, fname:null, email:null});
      },1500)
    }
    else if(this.state.fname && this.state.lname && this.state.email) {
        return fetch(url, {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: null
            }).then(response => {

                this.setState({status:"Success! Complete Sign Up by Confirming via Email"});
                setTimeout(() => {
                  document.getElementById("mail-form-main").style.animation = "clearForm 1.5s ease"
                  document.getElementsByName("fname")[0].value ="";
                  document.getElementsByName("lname")[0].value ="";
                  document.getElementsByName("email")[0].value ="";
                  this.setState({status:"Subscribe to Newsletter", lname: null, fname:null, email:null});
                },1500)
            }).catch(
                error => this.setState({status:"An error occurred. Please Try Again."})
            );
        }
    }
  render(){
    return(
      <div id="mail-form-main">
        <input type="text" name="email" placeholder="Email" onKeyDown={this.onType} className="mail-form-email"/>
        <input type="text" name="fname" placeholder="First Name" onKeyDown={this.onType} className="mail-form-name"/>
        <input type="text" name="lname" placeholder="Last Name" onKeyDown={this.onType} className="mail-form-name"/>
        <div className="mail-form-button" onClick={this.submitSignup}>
            <Button styleType='dark' type={null} innerHTML={this.state.status}/>
        </div>
      </div>
    )
  }
}


export default MailSignup;
