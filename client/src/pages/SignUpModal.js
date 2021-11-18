import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

axios.defaults.withCredentials = true;

export default function SignUpModal({ signUpModalOff }) {
  const [userinfo, setuserinfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    nickName: '',
    birth: '',
    phone: ''
  });
  
  const navigate = useNavigate();
  
  const inputValue = (key) => (e) => {
    setuserinfo({...userinfo, [key]: e.target.value});
  }
  
  const handleSignup = () => {
    const user = {email: userinfo.email, password: userinfo.password, userName: userinfo.userName,
      nickName: userinfo.nickName, birth: userinfo.birth, phone: userinfo.phone};
  
    if(!user.email || !user.password || !user.userName || !user.nickName || !user.birth || !user.phone) {
      alert('모든 항목은 필수입니다')
    }
    //console.log(user.email);
    axios.post('https://localhost:4000/signup', user,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
    .then((res) => {
      if(res.payload.success) {
        navigate('/');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };
  return (
    <div className="modal" id="signUpModal">
      <h3>회원가입</h3>
      <fieldset>
        <span>이메일</span>
        <input type="email" onChange={inputValue('email')}/>
      </fieldset>
      <fieldset>
        <span>비밀번호</span>
        <input type="password" onChange={inputValue('password')}/>
      </fieldset>
      <fieldset>
        <span>비밀번호 확인</span>
        <input type="password" onChange={inputValue('passwordCheck')}/>
      </fieldset>
      <fieldset>
        <span>이름</span>
        <input type="text" onChange={inputValue('userName')}/>
      </fieldset>
      <fieldset>
        <span>별명</span>
        <input type="text" onChange={inputValue('nickName')}/>
      </fieldset>
      <fieldset>
        <span>생년월일</span>
        <input type="number" onChange={inputValue('birth')}/>
      </fieldset>
      <fieldset>
        <span>휴대폰</span>
        <input type="number" onChange={inputValue('phone')}/>
      </fieldset>
      <div className="button" onClick={handleSignup}>
        회원가입
      </div>
      <div className="button" onClick={signUpModalOff}>
        닫기
      </div>
    </div>
  );
}
