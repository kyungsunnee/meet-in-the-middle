import React, { useEffect, useState } from "react";
const { kakao } = window;
//! import axios from "axios";
// 아이디 닉네임 비밀번호 비밀번호 확인 이름 휴대폰

//더미 데이터만 완성해서 보여주기 , 서버 연결해서 보여주기

export default function MapDiv({ myCurAdd, setMyCurAdd, userInfo }) {
  //* 중심 좌표 로직
  //   let points = [];

  //   userInfo.forEach((e) => points.push([e.lat, e.lng]));

  //   console.log(points);

  //   function getCentroid(points) {
  //     var area = 0,
  //       cx = 0,
  //       cy = 0;

  //     for (var i = 0; i < points.length; i++) {
  //       var j = (i + 1) % points.length;

  //       var pt1 = points[i];
  //       var pt2 = points[j];

  //       var x1 = pt1[0];
  //       var x2 = pt2[0];
  //       var y1 = pt1[1];
  //       var y2 = pt2[1];

  //       area += x1 * y2;
  //       area -= y1 * x2;

  //       cx += (x1 + x2) * (x1 * y2 - x2 * y1);
  //       cy += (y1 + y2) * (x1 * y2 - x2 * y1);
  //     }

  //     area /= 2;

  //     cx = cx / (6.0 * area);
  //     cy = cy / (6.0 * area);

  //     return {
  //       x: cx,
  //       y: cy,
  //     };
  //   }

  //   let center = getCentroid(points);

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(myCurAdd[0], myCurAdd[1]), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // var positions = [];

    var positions = [
      {
        title: "카카오",
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      },
      {
        title: "생태연못",
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ];

    userInfo.forEach((e) => {
      positions.push({
        title: `${e.username}`,
        latlng: new kakao.maps.LatLng(Number(e.lat), Number(e.lng)),
      });
    });

    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    //* 중심좌표 렌더부분
    // var centerPint = new kakao.maps.LatLng(center.x, center.y);

    // console.log(center);

    // var centerMarker = new kakao.maps.Marker({
    //   map: map,
    //   position: centerPint, // 마커를 표시할 위치
    // });

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다

      //   console.log(positions[i], positions[i].latlng);
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 0;">${positions[i].title}</div>`,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);
    }
  });

  return <div id="map"></div>;
}
