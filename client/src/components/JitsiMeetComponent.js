import React, { useState, useEffect } from "react";
import queryString from "query-string";
import ProgressComponent from "@material-ui/core/CircularProgress";
const JitsiMeetComponent = () => {
  const [loading, setLoading] = useState(false);

  const jitsiContainerStyle = {
    display: loading ? "none" : "block",
    width: "100%",
    height: "90vh",
  };

  function startConference() {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: "Neeraj",

        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          filmStripOnly: false,
          SHOW_JITSI_WATERMARK: true,
        },
        configOverwrite: {
          disableSimulcast: false,
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand("displayName", "MyName");
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }, []);

  return (
    <div>
      {loading && <ProgressComponent />}
      <div id="jitsi-container" style={jitsiContainerStyle} className="jitsi" />
    </div>
  );
};

export default JitsiMeetComponent;
