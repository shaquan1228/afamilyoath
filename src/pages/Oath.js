import React from 'react';
import InfoSquare from '../components/InfoSquare/InfoSquare.js';


class Oath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          title: "Philosophy",
          imgUrl: "",
          text: [
            "A Family OATH is an American luxury brand that embraces the outsiders. We are a  community-based brand that thrives off the idea of being counted out and beating the  odds.",
            "We understand that that everyone may not see the vision right away, but their time will  come.",
            "Our sole mission is to use our platform to allow shunned communities of people feel  welcomed.",
            "In order to bring these stories to life, OATH uses both wearable and visual art.",
            "With a commitment to detail and quality, OATH creates products that are regarded as  groundbreaking, timeless and unique. \"We are about originality and authenticity and at  our core we want to challenge identity, exclusion, and perspective.\""
          ]
        },
        {
          title: "MY BEGINNINGS, MY STORY",
          imgUrl: "",
          text: [
            "CHALO POPE, Founder and Creative Director",
            "Chalo Pope is a multi-disciplinary contemporary artist from Newark, NJ. ",
            "Chalo graduated from Lehigh University with a self-made dual major in Entrepreneurship and Design. Chalo designed this major when he realized he aspires to be a part of the tradition of great artists and political cultural movements that have emerged from Newark. That vision pushed him to move away from the  engineering track he was on and towards a life dedicated to his passion.",
            "During his experience at Lehigh, Chalo built sets and designed costumes for the  productions run at Lehigh University like Shakespeare’s A Midsummer’s Night’s Dream  and Noel Coward’s Blithe Spirit. While developing his eye for design and learning the  aspects of a business, the concept of A Family OATH was developed.",
            "Chalo envisions this American luxury brand to be home to the culturally aware who  resonate with feeling like the black sheep or outsider of the community. Oftentimes,  Chalo used OATH as his place of refuge and hopes it can be the same for others that  share his sentiment. ",
            "Through OATH, Chalo hopes to create an inclusive world that values and supports the  under-appreciated and under-represented who follow the path of their own heart."
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
                  style="img_left"
                />)
                : (<InfoSquare
                  title={item.title}
                  img={item.imgUrl}
                  innerHTML={item.text}
                  style="img_right"
                />)
            )
          })
        }
      </div>
    )
  }
}

export default Oath;
