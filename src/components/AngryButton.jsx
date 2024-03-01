import React from "react"; // optional

export default function AngryButton() {
  return (
    <button className="AngryButton">
      {/* When the threshold is not reached */}<span>Don't click me too much! </span>
      {/* When the threshold is not reached */}<span>Rawr!</span>
    </button>
  );
}
