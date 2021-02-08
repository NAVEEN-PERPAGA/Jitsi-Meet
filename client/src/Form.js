import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        meetingId: props.meetingId,
        displayName: props.displayName,
      },
    };
  }

  handleMeetingIdChanged(event) {
    var customer = this.state.customer;
    customer.meetingId = event.target.value;

    this.setState({ customer: customer });
  }
  handleDisplayNameChanged(event) {
    var customer = this.state.customer;
    customer.displayName = event.target.value;

    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    const meetingId = this.state.customer.meetingId;
    const displayName = this.state.customer.displayName;
    console.log(meetingId, displayName);
  }

  render() {
    return (
      <div>
        <div className="container welcome-page mt-5">
          Display Name:{" "}
          <input
            className="form-control"
            id="txtDispNme"
            type="text"
            value={this.state.customer.meetingId}
            onChange={this.handleMeetingIdChanged.bind(this)}
          />
          Meeting Name:
          <input
            className="form-control"
            type="text"
            value={this.state.customer.displayName}
            onChange={this.handleDisplayNameChanged.bind(this)}
          />
          <hr />
          <button onClick={this.handleButtonClicked.bind(this)}>
            Save Record
          </button>
          <br />
        </div>
      </div>
    );
  }
}
