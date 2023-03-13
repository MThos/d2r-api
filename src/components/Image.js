import React from "react";

const Image = (props) => {
  return (
    <img id={props.id} className={props.class} src={`images/${props.src}`} alt={props.image} />
  )
}

export default Image;