import React from 'react';
import InfoSquare from '../components/InfoSquare/InfoSquare.js';


class Oath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          title: "PHILOSOPHY",
          imgUrl: "./assets/afo1.png",
          text: [
            "A FAMILY OATH IS AN AMERICAN LUXURY BRAND THAT MAKES A PLEDGE TO OUR FAMILY. IT GOES AS FOLLOWS:",
            "",
            "\"I VOW TO MY FAMILY",
            "WHO HATH",
            "GUIDED ME IN TIMES OF TURMOIL,",
            "NURTURED MY DEVELOPMENT,",
            "AND INSTILLED IDEALS OF EQUITY",
            "TO STAY GROUNDED ON MY JOURNEY",
            "TO NEVER FORGET MY BEGINNINGS",
            "TO MAKE THE CHANGE I WANT TO SEE IN THE WORLD",
            "TO BE STRONG IN THE FACE OF DARKNESS",
            "AND INSPIRE MY PEERS TO",
            "TAKEOVER.\"",
            "",
            "WE HOPE THAT OUR OATH SHOWS YOU THAT WE ARE NO DIFFERENT FROM ONE ANOTHER. WE ARE ALL PEOPLE WHO WANT TO MAKE OUR FAMILY PROUD.",
            "A FAMILY OATH EXHIBITS THE OATH THROUGH OUR COMMITMENT TO PROVIDE QUALITY, STYLE AND AUTHENTICITY."   
          ]
        },
        {
          title: "MY BEGINNINGS, MY STORY",
          imgUrl: "./assets/chalo.png",
          text: [
            "CHALO POPE, FOUNDER & CREATIVE DIRECTOR",
            "I am a multi-disciplinary contemporary artist from Newark, NJ.",
            "I graduated from Lehigh University with a self-made dual major in Entrepreneurship and Design. I designed this major after realizing I wanted to work on more creative group projects.",
            "During my experience at Lehigh, I worked doing set and costume design for different theatre productions such as Shakespeare’s A Midsummer’s Night’s Dream and Noel Coward’s Blithe Spirit. This practice with building sets and designing costumes pushed me to create A FAMILY OATH.",
            "My intention with OATH is to make an American luxury brand that is home to those who feel like the black sheep or outsider of society. Throughout my life, I felt like an outsider, and OATH gave me a place of refuge.",
            "I hope OATH creates an inclusive world that values and supports us all who feel under-appreciated and under-represented."
          
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="business-logic-right">
        {
          this.state.info.map((item, i) => {
            return (
              (i % 2 === 1)
                ? (<InfoSquare
                  title={item.title}
                  img={item.imgUrl}
                  innerHTML={item.text}
                  style={{style:"img_left"}}
                />)
                : (<InfoSquare
                  title={item.title}
                  img={item.imgUrl}
                  innerHTML={item.text}
                  style={{style:"img_right"}}
                />)
            )
          })
        }
      </div>
    )
  }
}

export default Oath;
