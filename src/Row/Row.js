import React from "react";
import './Row.css'

export default function Row(props) {
  return (
    <div className="row">
      <label className="label">{props.label}</label>
      {props.children}
    </div>
  );
}
