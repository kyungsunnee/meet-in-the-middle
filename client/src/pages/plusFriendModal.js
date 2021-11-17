import React, { useState } from "react";
//! import axios from "axios";

export default function PlusFriend({ plusBtnOff, friendList, setfriendList }) {
  return (
    <div className="modal">
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <span>이름</span>
          <input type="text"></input>
        </fieldset>
        <fieldset>
          <span>전화번호</span>
          <input type="number"></input>
        </fieldset>
        <div className="button">추가</div>
        <div className="button" onClick={plusBtnOff}>
          닫기
        </div>
      </form>
    </div>
  );
}
