import { Component } from "react";

class ShowMessage extends Component {
  showMessage = (message) => {
    alert(message);
  };

  render() {
    const { message } = this.props;
    return (
      <>
        <button onClick={() => this.showMessage(message)}>Show Message</button>
      </>
    );
  }
}

export default ShowMessage;
