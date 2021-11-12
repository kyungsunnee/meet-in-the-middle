import React from "react";
//! import axios from "axios";

export default function Modal({ handleModalOff }) {
  return (
    <div className="modal">
      <div className="button" onClick={handleModalOff}>
        닫기
      </div>
    </div>
  );
}
