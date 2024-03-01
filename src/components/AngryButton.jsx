import { useState } from "react";

export default function AngryButton(props) {

  const [anger, setAnger] = useState(0);

  const handleClick = (amount) => {
    if (anger < 1) {
      setAnger(anger + amount)
    } else {
      setAnger(0)
    }

    props.increaseAnger(0.1)
  }

  return (
    <button onClick={() => handleClick(0.1)} className="AngryButton" style={{backgroundColor: `rgb(255,0,0,${anger})`}}>
      {/* When the threshold is not reached */}
      {anger < 1 && <span>Don't click me too much! </span>}
      {/* When the threshold is not reached */}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}
