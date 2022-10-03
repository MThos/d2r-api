import React from "react";

const LoggedOut = () => {
  return (
    <main id="logged-out" className="fade-in">
      <div id="logged-out-info-top">
        <p>This API contains information about &#8212; Diablo 2 Resurrected</p>
        <p>Available API &#8212; classes, skills, items, runes, quests and more</p>
        <p>Signup to receive a free API key &#8212; 20 requests per minute</p>
      </div>
      <div id="logged-out-img">
        <img src="images/amazon_example.png" alt="api example" />
      </div>
    </main>
  )
}

export default LoggedOut;