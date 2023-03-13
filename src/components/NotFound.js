import React from "react";

const NotFound = () => {
  return (
    <main id="not-found" className="fade-in">
      <div id="not-found-title">
        That Page Cannot Be Found
      </div>
      <div id="not-found-img">
        <img src="images/404.webp" alt="404 error" />
      </div>      
      <div id="not-found-message">
        <div>If you believe this is an error with our website &#8212; please contact us</div>
        <div id="not-found-email"><a href="mailto:admin@d2r-api.com">admin@d2r-api.com</a></div>
      </div>
      <div id="not-found-status">
        <div>Status Code: 404</div>
        <div>URL:{window.location.href}</div>
      </div>
    </main>
  )
}

export default NotFound