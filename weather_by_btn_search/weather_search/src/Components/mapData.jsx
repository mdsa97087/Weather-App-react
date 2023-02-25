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
        // width={100}
      ></iframe>
    </div>
  );
}

export default MapData;
