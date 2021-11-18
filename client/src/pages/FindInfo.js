import React, { useState } from "react";
import axios from "axios";

export default function FindInfo({ findModalOff }) {
  const [userinfo, setuserinfo] = useState({
    userName: '',
    birth: '',
    phone: ''
  });

  const inputValue = (key) => (e) => {
    setuserinfo({...userinfo, [key]: e.target.value});
  }

  const findInfo = () => {
    const user = {userName: userinfo.userName, birth: userinfo.birth, phone: userinfo.phone};
  
    if(!user.userName || !user.birth || !user.phone) {
      alert('모든 항목은 필수입니다')
    }
    axios.post('https://localhost:4000/findlongininfo', user,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
    .then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="modal">
      <fieldset>
        <span>이름</span>
        <input type="text" onChange={inputValue('userName')}></input>
      </fieldset>
      <fieldset>
        <span>생년월일</span>
        <input type="text" onChange={inputValue('birth')}></input>
      </fieldset>
      <fieldset>
        <span>전화번호</span>
        <input type="number" onChange={inputValue('phone')}></input>
      </fieldset>
      <button>찾기</button>
      <div className="button" onClick={findModalOff}>
        닫기
      </div>
    </div>
  );
}
