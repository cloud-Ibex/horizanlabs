import React, { useState } from "react";

export default function Toggle(props) {
  const [toggleState, setToggleState] = useState("");

  function toggle() {
    setToggleState(toggleState === "" ? "active" : "");
  }

  return  <div className={`tabs-toggle-switch ${toggleState}`} onClick={toggle} />;
}

