/*global kakao*/
import React, { useEffect, useState } from "react";
const { kakao } = window;
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

//더미 데이터만 완성해서 보여주기 , 서버 연결해서 보여주기

export default function MapDiv({ curAdd, myCurAdd, setMyCurAdd }) {
  const [inputAdd, setInputAdd] = useState([37.541, 126.986]);
  let add = curAdd ? curAdd : null;

  //   const selectKeyWord = () => {
  //     console.log("선택");
  //   };

  useEffect(() => {
    let markers = [];
    let infos = [];

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setInputAdd([position.coords.latitude, position.coords.longitude]);
        // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      });
    }

    // console.log(inputAdd);
    setMyCurAdd([inputAdd[0], inputAdd[1]]);

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(inputAdd[0], inputAdd[1]), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    if (add) {
      console.log(curAdd);

      geocoder.addressSearch(add, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          setMyCurAdd([result[0].y, result[0].x]);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          markers.push(marker);
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${add}</div>`,
          });
          infos.push(infowindow);
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        setMyCurAdd([lat, lon]);

        const locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });

      function displayMarker(locPosition, message) {
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        });
        markers.push(marker);

        const iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;

        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        infos.push(infowindow);
        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
      }
    }

    // 지도에 마커를 표시합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      for (let j = 0; j < infos.length; j++) {
        infos[j].setMap(null);
      }

      var marker = new kakao.maps.Marker({
        position: latlng,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px;">여기???????</div>',
      });

      infos.push(infowindow);
      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      markers.push(marker);
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setMap(map);
    });
  }, [add]);

  return <div id="map"></div>;
}
