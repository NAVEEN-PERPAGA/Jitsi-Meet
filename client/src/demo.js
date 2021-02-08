import React, { useState } from "react";
import Form from "./Form";
import MeetPage from "./MeetPage";

function Demo(props) {
  const [showResults, setShowResults] = React.useState(false);

  const startMeet = () => {
    setShowResults(true);
    handleClick();
    console.log("sdgf");
  };

  const handleClick = () => {
    var apiObj = null;
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
  };

  //   const onClick = () => setShowResults(true);

  return (
    <div>
      <Form />
    </div>
  );
}

export default Demo;
