import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinMeeting.css";

const JoinMeeting = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="joinInput"
            type="text"
            placeholder="Enter your name..."
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            type="text"
            placeholder="Enter your room name..."
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/meeting?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Start Meeting
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinMeeting;
