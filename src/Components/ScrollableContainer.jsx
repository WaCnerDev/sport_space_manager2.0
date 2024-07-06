import React from "react";

const ScrollableContainer = ({ children, height }) => {
  return (
    <div style={{ height, overflowY: "auto", paddingRight: "10px"}}>
      {children}
    </div>
  );
};

export default ScrollableContainer;