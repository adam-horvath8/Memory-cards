import React from "react";

const Message = ({ playAgainFunction, message, setScore, setCardsPicked }) => {
  const handleClick = () => {
    playAgainFunction(false);
    setScore(0);
    setCardsPicked([]);
  };

  return (
    <div className="message-container">
      <div className="message">
        {message}
        <button onClick={handleClick}>Play again</button>
      </div>
    </div>
  );
};

export default Message;
