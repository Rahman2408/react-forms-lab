import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 999,
      message: "",
      charsLeft: 0
    };
  }

  // handleChars = (event) => {
  //   let newCharCount = this.state.maxChars - this.state.message.length
  //   this.setState({
  //     charsLeft: newCharCount
  //   })
  // }

  handleMessage = (event) => {
    
      this.setState({
        message: event.target.value,
      
      })
    
  }

  render() {
    let newCharCount = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleMessage(event)} value={this.state.message}/>
        <h2>{newCharCount}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
