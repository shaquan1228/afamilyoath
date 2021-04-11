import React from 'react';
import InfoSquare from '../components/InfoSquare/InfoSquare.js';


const dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const numbers = [1, 2, 3, 4, 5];

class Policies extends React.Component{
  constructor(props){
    super(props);
    this.state = {}

  }

  render(){
    return(
      <div className="business-logic-right">
      {
        numbers.map(function(number){
          return <InfoSquare title={"Question "+number} innerHTML={dummyText} style={null} />
        })
      }

      </div>
    )
  }
}


export default Policies;
