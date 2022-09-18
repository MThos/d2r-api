import React from "react";

const Textbox = (props) => {
  return (
    <input id="api-key" type="text" name="api-key" value={props.api_key} disabled />
  )
}

export default Textbox;