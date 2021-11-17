import React from "react";
//! import axios from "axios";

export default function FindInfo({ findModalOff }) {
  return (
    <div className="modal">
      <fieldset>
        <span>이름</span>
        <input type="text"></input>
      </fieldset>
      <fieldset>
        <span>전화번호</span>
        <input type="number"></input>
      </fieldset>
      <div className="button" onClick={findModalOff}>
        닫기
      </div>
    </div>
  );
}
