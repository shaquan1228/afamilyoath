import React from 'react';
import Button from './../components/Button/Button.js';



class Test extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }
//TODO: @Carlos: add props to test your buttons like on the pdf
  render(){
    return(
      <div>
          <Button/>
      </div>
    )
  }
}


export default Test;
