import React from "react";
import inspo1 from "../src/inspopics/inspo1.jpg";
import inspo2 from "../src/inspopics/inspo2.jpg";
import inspo3 from "../src/inspopics/inspo3.jpg";
import inspo4 from "../src/inspopics/inspo4.jpg";
import inspo5 from "../src/inspopics/inspo5.jpg";
import inspo6 from "../src/inspopics/inspo6.jpg";
import inspo7 from "../src/inspopics/inspo7.jpg";
import inspo8 from "../src/inspopics/inspo8.jpg";
import inspo9 from "../src/inspopics/inspo9.jpg";
import inspo10 from "../src/inspopics/inspo10.jpeg";
import inspo11 from "../src/inspopics/inspo11.jpeg";
import inspo12 from "../src/inspopics/inspo12.jpg";
import inspo13 from "../src/inspopics/inspo13.png";
import inspo14 from "../src/inspopics/inspo14.jpg";
import inspo15 from "../src/inspopics/inspo15.jpg";
import inspo16 from "../src/inspopics/inspo16.jpeg";
import inspo17 from "../src/inspopics/inspo17.jpg";
import inspo18 from "../src/inspopics/inspo18.jpg";
import inspo19 from "../src/inspopics/inspo19.jpg";
import inspo20 from "../src/inspopics/inspo20.jpg";


import { Component } from "react";

class Inspiration extends Component {   
state = {
  
index: 0, picList: [inspo1, inspo2, inspo3, inspo4, inspo5, inspo6, inspo7,
inspo8, inspo9, inspo10, inspo11, inspo12, inspo13, inspo14, inspo15, inspo15, 
inspo16, inspo17, inspo18, inspo19, inspo20]
}


onClickNext= () => {
    if (this.state.index + 1 === this.state.picList.length ){
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  onClickPrevious= () => {
    if (this.state.index - 1 === -1 ){
        this.setState({ 
            index: this.state.picList.length - 1
          })
      } else {
          this.setState({
              index: this.state.index - 1
          })
      }
    }

render() {
return (
  <div className="galleryContainer"style={{width: '100vw'}}>
    <div className="imageGallery">
      <div className="masterImage">
        <img src={this.state.picList[this.state.index]} style={{"maxHeight":"70%","maxWidth":"70%"}} alt="bighairstyle" />
      </div>
    
      <div className="hairButtons">
        <button className="previousButton" onClick={this.onClickPrevious}> -- Go back I want to see the last one </button>
        <button className="nextButton" onClick={this.onClickNext}> Show me more I can't get enough -- </button>
      </div>
    </div>
  </div>
);
}
}



export default Inspiration;