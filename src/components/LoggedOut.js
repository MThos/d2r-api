import React from "react";

const LoggedOut = () => {
  return (
    <main className="fade-in">
      <div id="logged-out-info-top">
        <p>This API contains information about &#8212; Diablo 2 Resurrected</p>
        <p>Endpoints &#8212; classes, skills, items, runewords, quests and more...</p>
        <br/>
        <p>Signup to receive a free API key &#8212; 20 requests per minute!</p>
      </div>
      <div>
        <img id="api-example-img" src="images/amazon_example.png" alt="api example" />
      </div>
      <div>
        <p id="logged-out-info-bottom">^ example of the Amazon endpoint in JSON format ^</p>
      </div>
    </main>
  )
}

export default LoggedOut;