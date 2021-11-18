import React, { useState, useEffect, useRef } from "react";
import SignUpModal from "./SignUpModal";
import FindInfo from "./FindInfo";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Login({ logo, loginSuccess }) {
  const modal = document.getElementsByClassName("modal");
  const signBtn = document.getElementById("sign-btn");
  const findBtn = document.getElementById("find-btn");
  // 모달 관련 useState
  const [isOpen, setOpen] = useState(false);
  const [isOpenFind, setOpenFind] = useState(false);

  const signUpModalOpen = () => {
    setOpen(true);
  };

  const findModalOpen = () => {
    setOpenFind(true);
    console.log(isOpenFind);
  };

  const ModalOff = () => {
    setOpen(false);
    setOpenFind(false);
  };

  // 로그인 통신
  const [logininfo, setlogininfo] = useState({
    email: '',
    password: ''
  });

  const inputValue = (key) => (e) => {
    setlogininfo({...logininfo, [key]: e.target.value});
  };

  const handleSignin = () => {
    const login = {email: logininfo.email, password: logininfo.password};
    //console.log(login);

    if(!login.email || !login.password) {
      alert('이메일과 비밀번호를 입력하세요');
    }
    axios.post('https://localhost:4000/signin', login,
      {headers: {'Content-Type': 'application/json'}, withCredentials: true}
    )
    .then((res) => {
      //console.log(res);
      loginSuccess(res);
    })
  };

  // window.onclick = function (event) {
  //   if (event.target !== modal[0] && isOpen && event.target !== signBtn) {
  //     ModalOff();
  //   }
  // };

  return (
    <div>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
        <body className="inner-container">
          <section className="identity">
            {/* <h1>로고 및 소개 영역</h1> */}
            <div className="intro-area">
              <div className="container">
                <img src={logo} alt="logo" id="logo-login" />
                <div>우리 가운데서 만나요!</div>
              </div>
            </div>
          </section>
          <section className="inputArea">
            {/* <h1>입력 영역</h1> */}
            <div id="input-container">
              <h3 className="project-name">Meet in the middle</h3>
              <input className="page1" type="text" placeholder="Email" onChange={inputValue('email')}/>
              <input
                className="page1"
                type="password"
                placeholder="password"
                onChange={inputValue('password')}
              ></input>
              <button className="page1 button" onClick={handleSignin}>LOGIN</button>
              <button
                className="page1 button"
                id="sign-btn"
                onClick={signUpModalOpen}
              >
                SIGN UP
              </button>
              <div
                className="page1 button"
                id="find-Btn"
                onClick={findModalOpen}
              >
                아이디 / 비밀번호 찾기
              </div>
            </div>
          </section>
        </body>
        </form>
        {isOpen ? <SignUpModal signUpModalOff={ModalOff} /> : null}
        {isOpenFind ? <FindInfo findModalOff={ModalOff} /> : null}
      </center>
    </div>
  );
}
