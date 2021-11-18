import React from "react";
//! import axios from "axios";

export default function FindInfo({ findModalOff }) {
  return (
    <div className="modal">
      <div className="close-btn" onClick={findModalOff}>
        X
      </div>
      <fieldset>
        <input className="modal-list" type="text" placeholder="Name"></input>
      </fieldset>
      <fieldset>
        <input className="modal-list" type="number" placeholder="Phone"></input>
      </fieldset>
      <button className="modal-btn">아이디 / 비밀번호 찾기</button>
    </div>
  );
}
