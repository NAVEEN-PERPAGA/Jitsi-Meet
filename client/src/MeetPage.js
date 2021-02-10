import React from "react";
var $ = require("jquery");

export default class MeetPage extends React.Component {
  constructor(props) {
    super(props);
  }

  startMeeting = (roomName, displayName) => {
    const domain = "meet.jit.si";
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
    //    apiObj = new JitsiMeetExternalAPI(domain, options);
  };
  render() {
    return (
      <div>
        <div className="container mt-5 main-meet-page">
          <div id="toolbox" className="toolbox">
            <button id="btnHangup">Hangup</button>
            <button id="btnCustomMic">Mic</button>
            <button id="btnCustomCamera">Camera</button>
            <button id="btnCustomTileView">Toggle Tileview</button>
            <button id="btnScreenShareCustom">SS</button>
            <button>
              <a href="/">Close</a>
            </button>
          </div>
          <div id="jitsi-meet-conf-container"></div>
        </div>
      </div>
    );
  }
}
