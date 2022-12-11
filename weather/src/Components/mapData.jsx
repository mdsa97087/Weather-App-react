import React from "react";
import "./style.css";

function MapData({ src }) {
  return (
    <div className="mapouter">
      <iframe
        className="gmap_canvas"
        src={src}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
      {/* <a href="https://123movies-to.org"></a>
      <a href="https://www.embedgooglemap.net">
                 google map code generator</a> */}
    </div>
  );
}

export default MapData;
