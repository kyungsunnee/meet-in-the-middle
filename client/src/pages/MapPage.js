import React, { useEffect } from "react";
const { kakao } = window;
//! import axios from "axios";

export default function MapPage({ logo }) {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  console.log(kakao);
  return (
    <div className="main">
      <section className="top">상단 bar</section>
      <body className="inner">
        <div className="side">
          <div className="myinfo">내정보</div>
          <ul>
            <li>친구1</li>
            <li>친구2 (map함수)</li>
          </ul>
          <button>re meet</button>
        </div>
        <div className="map">
          <div>
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
          </div>
        </div>
      </body>
    </div>
  );
}

/*global kakao*/
