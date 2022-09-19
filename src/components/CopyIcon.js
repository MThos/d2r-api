import React from "react";

const CopyIcon = (props) => {
  return (
    <img id="copy" 
      data-tip={props.tooltip.toUpperCase()}
      data-border="true" 
      data-place="bottom" 
      data-background-color="black"
      src="images/copy.webp" 
      alt="copy to clipboard" 
      onClick={() => {navigator.clipboard.writeText(props.api_key)}} />
  )
}

export default CopyIcon;