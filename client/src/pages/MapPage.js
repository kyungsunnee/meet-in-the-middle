import React, { useState, useEffect } from "react";
import MyProfileModal from "./MyProfileModal";
import MapDiv from "./mapDiv";
import PlusFriend from "./plusFriendModal";
import KakaoMapCurrent from "./test";
import userInfo from "../dummy";
import ListUpMapDiv from "./ListUpMapDiv";
const { kakao } = window;
//import axios from "axios";

//axios.defaults.withCredentials = true;

export default function MapPage({ logo }) {
  //console.log(props);
  let curDeg = [37.365264512305174, 127.10676860117488];
  const [curAdd, setCurAdd] = useState("");
  const [isOpenMyProfile, setOpenMyProfile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [address, setAddress] = useState("");
  const [onPlus, setOnPlus] = useState(false);
  const [friendList, setfriendList] = useState([]);

  const [myCurAdd, setMyCurAdd] = useState([]);

  const [meetOn, setMeetOn] = useState(false);

  // const [test, setTest] = useState(false);

  friendList.map((e) => console.log(e));

  // const testBtn = () => {
  //   setTest(true);
  // };

  const searchInputOn = () => {
    setIsSearch(true);
  };

  const searchBtnOn = () => {
    setCurAdd(address);
  };

  const inputAdd = (e) => {
    setAddress(e.target.value);
  };

  const myProfileModalOpen = () => {
    setOpenMyProfile(true);
  };

  const myProfileModalOff = () => {
    setOpenMyProfile(false);
  };

  const plusBtnOn = () => {
    setOnPlus(true);
    setOpenMyProfile(false);
  };

  const plusBtnOff = () => {
    setOnPlus(false);
  };

  const meetBtnOn = () => {
    setMeetOn(true);
  };

  return (
    <div className="main">
      {/* <button onClick={testBtn}>주소 불러오기</button> */}
      <section className="top">
        <div className="logo" id="myProfilelogo">
          <img src={logo} alt="logo" />
        </div>
        <div id="top-bar">Meet In The Middle</div>
        <div className="button" id="myProfileBtn" onClick={myProfileModalOpen}>
          my
        </div>
      </section>
      {onPlus ? (
        <PlusFriend
          plusBtnOff={plusBtnOff}
          friendList={friendList}
          setfriendList={setfriendList}
        />
      ) : null}
      {isOpenMyProfile ? (
        <MyProfileModal myProfileModalOff={myProfileModalOff} />
      ) : null}
      <body className="inner">
        <div className="side">
          <div className="myinfo">내정보</div>
          {isSearch ? (
            <div>
              <input type="text" onChange={(e) => inputAdd(e)} />
              <button onClick={searchBtnOn}>검색</button>
            </div>
          ) : (
            <button onClick={searchInputOn}>주소 검색</button>
          )}
          <ul>
            {userInfo.map((e) => (
              <li>
                <img src={e.image} className="profileImg" alt="" />
                <span>{e.username}</span>
              </li>
            ))}
          </ul>
          <button onClick={plusBtnOn}>친구 추가</button>
          <button>re meet</button>
          <button onClick={meetBtnOn}>Meet!!!!</button>
        </div>
        <div className="map">
          <div>
            {/* <div id="map"></div> */}
            {meetOn ? (
              <ListUpMapDiv
                myCurAdd={myCurAdd}
                setMyCurAdd={setMyCurAdd}
                userInfo={userInfo}
              />
            ) : (
              <MapDiv
                curAdd={curAdd}
                myCurAdd={myCurAdd}
                setMyCurAdd={setMyCurAdd}
              />
            )}
          </div>
        </div>
      </body>
    </div>
  );
}
