import React, { } from "react";
import MeetPage from "./MeetPage";
export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meetingId: props.meetingId,
      displayName: props.displayName,
      showResults: false,
    };
  }
  componentDidMount() {
  //   const apiUrl = "http://meet.jit.si/external_api.js";

  //   fetch(apiUrl)
  //     .then(function (data) {
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://meet.jit.si/external_api.js", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  
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
    this.btnHangup();
    const displayName = this.state.displayName;
    const meetingId = this.state.meetingId;
    this.startMeeting(meetingId, displayName);
    this.setState({ showResults: true });
  }

  btnHangup = () => {
    var apiObj = null;
    // apiObj.CopyToClipboard("hangup");
    alert("sjkjdhfksa");
  };

  startMeeting = (roomName, displayName) => {
    const domain = "meet.jit.si";
    const options = {
      roomName: roomName,
      width: "100%",
      height: "100%",
      parentNode: document.querySelector("#jitsi-meet-conf-container"),
      userInfo: {
        displayName: displayName,
      },
      configOverwrite: {
        doNotStoreRoom: true,
        startVideoMuted: 0,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
        enableWelcomePage: false,
        prejoinPageEnabled: false,
        disableRemoteMute: true,
        remoteVideoMenu: {
          disableKick: true,
        },
      },
      interfaceConfigOverwrite: {
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DEFAULT_REMOTE_DISPLAY_NAME: "New User",
        TOOLBAR_BUTTONS: [],
      },
    };
  };
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
            value={this.state.displayName}
            onChange={this.handleDisplayNameChanged.bind(this)}
          />
          <hr />
          <div>
            <input
              type="submit"
              value=" Save Record"
              onClick={this.handleButtonClicked.bind(this)}
            />
            {this.state.showResults ? (
              <MeetPage
                displayName={this.state.displayName}
                meetingId={this.state.meetingId}
              />
            ) : null}
          </div>
          <br />
        </div>
      </div>
    );
  }
}
