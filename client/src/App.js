import React, { } from "react";
import "./App.css";
import Demo from "./demo";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.startMeet = this.startMeet.bind(this);

    // This binding is necessary to make `this` work in the callback
  }

  startMeet = (e) => {
    e.preventDefault();
    this.handleClick();
    // const btnStart = () => {
    //   console.log(this.state.meetingId);
    //   //   const [meetingId, setMeetingId] = useState("");
    //   //   const [displayName, setDisplayName] = useState("");
    //   //   StartMeeting(setMeetingId, setDisplayName);
    // };
  };

  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}

export default App;
