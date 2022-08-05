import React from "react";
import inspo1 from "./inspo1.jpg"
import inspo2 from "./inspo2.jpg"


import { Component } from "react";


    

class Inspiration extends Component {   
state = {
index: 0, picList: [inspo1, inspo2]
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
  <div className="imageGallery">
      <div className="masterImage">
        <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} alt="bighairstyle" />
      </div>
    
    <div className="hairButtons">
        <button className="previousButton" onClick={this.onClickPrevious}> Previous Hairstyle </button>
        <button className="nextButton" onClick={this.onClickNext}> Next Hairstyle </button>
    </div>
  </div>
);
}
}



export default Inspiration;