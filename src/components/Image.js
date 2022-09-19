import React from "react";

const Image = (props) => {
  return (
    <img className={props.class} src={`images/${props.image}`} alt={props.image} />
  )
}

export default Image;