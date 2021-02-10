import React from "react";
import JitsiMeetComponent from "./JitsiMeetComponent";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meetingId: props.meetingId,
      displayName: props.displayName,
      showResults: false,
    };
  }

  //  ***************************jQuery End******************************

  handleMeetingIdChanged(event) {
    var meetingId = event.target.value;
    this.setState({ meetingId: meetingId });
  }
  handleDisplayNameChanged(event) {
    var displayName = this.state.displayName;
    displayName = event.target.value;

    this.setState({ displayName: displayName });
  }

  handleButtonClicked() {
    // this.btnHangup();
    const displayName = this.state.displayName;
    const meetingId = this.state.meetingId;

    this.setState({ showResults: true });
  }

  render() {
    return (
      <div>
        <div className="container welcome-page">
          Display Name:{" "}
          <input
            className="form-control"
            id="txtDispNme"
            type="text"
            value={this.state.meetingId}
            onChange={this.handleMeetingIdChanged.bind(this)}
          />
          Meeting Name:
          <input
            className="form-control"
            type="text"
            id="txtMeetingId"
            value={this.state.displayName}
            onChange={this.handleDisplayNameChanged.bind(this)}
          />{" "}
          <hr />
          <div>
            <input
              type="submit"
              value=" Save Record"
              onClick={this.handleButtonClicked.bind(this)}
            />

            {this.state.showResults ? (
              <JitsiMeetComponent
                displayName={this.state.displayName}
                meetingId={this.state.meetingId}
              />
            ) : null}
          </div>
          <br />
          <hr />
        </div>
      </div>
    );
  }
}
