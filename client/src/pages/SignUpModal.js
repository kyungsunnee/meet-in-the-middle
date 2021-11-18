import React from "react";
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

export default function SignUpModal({ signUpModalOff }) {
  return (
    <div>
      <div className="modal" id="signUpModal">
        <div className="close-btn" onClick={signUpModalOff}>
          x
        </div>
        <h3 className="singup-btn">SING UP</h3>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Email"></input>
        </fieldset>
        <fieldset>
          <input
            className="modal-list"
            type="password"
            placeholder="password"
          ></input>
        </fieldset>
        <fieldset>
          <input
            className="modal-list"
            type="password"
            placeholder="password confirm"
          ></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Name"></input>
        </fieldset>
        <fieldset>
          <input className="modal-list" type="text" placeholder="Phone"></input>
        </fieldset>
        <button className="modal-btn">가입하기</button>
      </div>
      <div className="blur"></div>
    </div>
  );
}
