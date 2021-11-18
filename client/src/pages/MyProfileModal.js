import React from "react";
import userInfo from "../dummy";
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

export default function MyProfileModal({ myProfileModalOff }) {
  return (
    <div className="modal">
      <div className="close-btn" onClick={myProfileModalOff}>
        X
      </div>
      <h3>회원 정보</h3>
      <div id="myPhotoDiv">
        <img
          id="profile-img"
          src="https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png"
          alt="profile-img"
        />
      </div>
      <fieldset>
        <span>이름{}</span>
      </fieldset>
      <fieldset>
        <span>이메일{}</span>
      </fieldset>
      <fieldset>
        <input
          className="info-modal-list"
          type="text"
          placeholder="password"
        ></input>
      </fieldset>
      <fieldset>
        <input
          className="info-modal-list"
          type="text"
          placeholder="password confrim"
        ></input>
      </fieldset>

      <fieldset>
        <input
          className="info-modal-list"
          type="number"
          type="text"
          placeholder="phone"
        ></input>
      </fieldset>
      <button className="modal-btn">회원정보 수정</button>
      <div id="myinfo-btn2">
        <span className="myinfo-btn">로그아웃</span>
        <span> / </span>
        <span className="myinfo-btn">회원탈퇴</span>
      </div>
    </div>
  );
}
