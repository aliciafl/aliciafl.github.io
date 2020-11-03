import React from "react";
import { VectorMap } from "react-jvectormap";

import './parts.css';

const mapData = {
  LT: 9900,
  ES: 9900,
};
const handleClick = (e, countryCode) => {
  //console.log(countryCode);
  var urlLink;
      switch (countryCode) {
        case 'LT': 
          urlLink = 'http://www.google.com/';
          window.open(urlLink,"_self");
          //window.open(urlLink, '_blank');
          break;
        default:
            break;
      };
      
};
const Map = () => {
  return (
    <div >
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "32vh"
        }} 
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e1e1e1",
            "fill-opacity": 2.5,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 3.8,
            cursor: "pointer"
          },
          //selected: {
            //fill: "#2938bc" //color for the clicked country
          //},
          //selectedHover: {}
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </div>
  );
};
export default Map;