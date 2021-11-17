import React from "react";
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

export default function SignUpModal({ signUpModalOff }) {
  return (
    <div className="modal" id="signUpModal">
      <h3>회원가입</h3>
      <fieldset>
        <span>이메일</span>
        <input type="text"></input>
      </fieldset>
      <fieldset>
        <span>비밀번호</span>
        <input type="password"></input>
      </fieldset>
      <fieldset>
        <span>비밀번호 확인</span>
        <input type="password"></input>
      </fieldset>
      <fieldset>
        <span>이름</span>
        <input type="text"></input>
      </fieldset>
      <fieldset>
        <span>휴대폰</span>
        <input type="number"></input>
      </fieldset>
      <div className="button" onClick={signUpModalOff}>
        닫기
      </div>
    </div>
  );
}
