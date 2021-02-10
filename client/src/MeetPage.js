// import React from "react";
// var $ = require("jquery");

// export default function MeetPage(props) {
//   const meetingId = props.meetingId;
//   const displayName = props.displayName;
//   const startMeeting = (roomName, displayName) => {
//     const domain = new "meet.jit.si"();
//     let a = 20;
//     const options = {
//       roomName: roomName,
//       width: "100%",
//       height: "100%",
//       parentNode: document.querySelector("#jitsi-meet-conf-container"),
//       userInfo: {
//         displayName: displayName,
//       },
//       configOverwrite: {
//         doNotStoreRoom: true,
//         startVideoMuted: 0,
//         startWithVideoMuted: true,
//         startWithAudioMuted: true,
//         enableWelcomePage: false,
//         prejoinPageEnabled: false,
//         disableRemoteMute: true,
//         remoteVideoMenu: {
//           disableKick: true,
//         },
//       },
//       interfaceConfigOverwrite: {
//         filmStripOnly: false,
//         SHOW_JITSI_WATERMARK: false,
//         SHOW_WATERMARK_FOR_GUESTS: false,
//         DEFAULT_REMOTE_DISPLAY_NAME: "New User",
//         TOOLBAR_BUTTONS: [],
//       },
//     };
//     //    apiObj = new JitsiMeetExternalAPI(domain, options);
//   };
//   return (
//     <div>
//       <div className="container mt-5 main-meet-page">
//         <div id="toolbox" className="toolbox">
//           <button id="btnHangup">Hangup</button>
//           <button id="btnCustomMic">Mic</button>
//           <button id="btnCustomCamera">Camera</button>
//           <button id="btnCustomTileView">Toggle Tileview</button>
//           <button id="btnScreenShareCustom">SS</button>
//           <input type="submit" value="End Call" />
//         </div>
//         <div id="jitsi-meet-conf-container"></div>
//         <h1>{props.meetingId}</h1>
//       </div>
//     </div>
//   );
// }
