import React from "react";

const LoggedOut = () => {
  return (
    <main className="fade-in">
      <div id="logged-out-info-top">
        <p>This API contains information about &#8212; Diablo 2 Resurrected!</p>
        <p>Available &#8212; classes, skills, items, runes, quests, etc.</p>
        <br/>
        <p>Signup to receive a free API key &#8212; 20 requests per minute!</p>
      </div>
      <div>
        <p id="logged-out-info-bottom">Amazon API Call Example</p>
      </div>
      <div>
        <img id="api-example-img" src="images/amazon_example.png" alt="api example" />
      </div>
    </main>
  )
}

export default LoggedOut;