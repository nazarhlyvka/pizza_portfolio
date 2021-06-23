import React from "react";
import "./Btn.scss";

const Btn = ({ content, disable }) => {
  return (
    <button className={disable ? "btn b_r10px btn_disable" : "btn b_r10px"}>
      {content}
    </button>
  );
};

export default Btn;
