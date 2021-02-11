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
        <div className="welcome-page">
          <form class="form-inline mt-5 aligin-items-center justify-content-center"></form>

          <div className="row">
            <div className="col-md-4">
              Display Name:{" "}
              <input
                className="form-control"
                id="txtDispNme"
                type="text"
                value={this.state.meetingId}
                onChange={this.handleMeetingIdChanged.bind(this)}
              />
            </div>
            <div className="col-md-4">
              {" "}
              Meeting Name:
              <input
                className="form-control"
                type="text"
                id="txtMeetingId"
                value={this.state.displayName}
                onChange={this.handleDisplayNameChanged.bind(this)}
              />{" "}
            </div>
          </div>

          <input
            type="submit"
            value=" Start Meet"
            onClick={this.handleButtonClicked.bind(this)}
          />

          {this.state.showResults ? (
            <div className="row">
              <div className="col-md-12">
                {" "}
                <JitsiMeetComponent
                  displayName={this.state.displayName}
                  meetingId={this.state.meetingId}
                />
              </div>
            </div>
          ) : null}
        </div>
        <br />
        <hr />
      </div>
    );
  }
}
