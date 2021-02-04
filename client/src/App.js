import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.startMeet = this.startMeet.bind(this);

    // This binding is necessary to make `this` work in the callback
  }

  startMeet = (e) => {
    e.preventDefault();
    this.handleClick();
    const btnStart = () => {
      console.log(this.state.meetingId);
      //   const [meetingId, setMeetingId] = useState("");
      //   const [displayName, setDisplayName] = useState("");
      //   StartMeeting(setMeetingId, setDisplayName);
    };
  };

  handleClick() {
    const apiObj = null;

    const btnHangup = () => {
      apiObj.executeCommand("hangup");
    };
    const btnCustomMic = () => {
      apiObj.executeCommand("toggleAudio");
    };
    const btnCustomCamera = () => {
      apiObj.executeCommand("toggleVideo");
    };
    const btnCustomTileView = () => {
      apiObj.executeCommand("toggleTileView");
    };
    const btnScreenShareCustom = () => {
      apiObj.executeCommand("toggleShareScreen");
    };
  }

  startMeeting = (roomName, displayName) => {
    const domain = "meet.jitsi";
    const options = {
      roomName: roomName,
      width: "100%",
      height: "100%",
      parentNode: document.querySelector("#jitsi-meet-conf-container"),
      userInfo: {
        // displayName: dispNme,
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
      <div className="container main-body">
        <Form />
        <div className="container welcome-page">
          Display Name: <input id="txtDispNme" type="text" />
          Meeting Name:
          <input type="text" />
          <button type="submit" onClick={this.startMeet}>
            Start
          </button>
          <br />
        </div>
        <div class="container mt-5 main-meet-page">
          <div id="toolbox" class="toolbox">
            <button id="btnHangup">Hangup</button>
            <button id="btnCustomMic">Mic</button>
            <button id="btnCustomCamera">Camera</button>
            <button id="btnCustomTileView">Toggle Tileview</button>
            <button id="btnScreenShareCustom">SS</button>
          </div>
          <div id="jitsi-meet-conf-container"></div>
        </div>
      </div>
    );
  }
}

export default App;
