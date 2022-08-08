import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './App.css';
import Background from "./radio-bg-2.png";
import Image from "./defaultimg.jpg";


///setting up state to set stations and filters. use all to use regardless of genre
export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");
  const defaultImage = Image;
// when station filter clicked calls function, sets up api, sets data into setstations
  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter]);
///call the api. from npm docs
  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 1
      })
      .then((data) => {
        return data;
      });

    return stations;
  };
///searching by tag on api
  const filters = [
    "rock",
    "retro",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap"
  ];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };
///mapping through all the filters
///setting click event to select the filter
///setting up the radio name and station icon
  return (
    <div className="radio">
      <div className="filters">
        {filters.map((filter, index) => (
          <span
            key={index}
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            <button className="filterButton">
            {filter}
              </button>
          </span>
        ))}
      </div>
      <div className="stations">
        {stations &&
          stations.map((station, index) => {
            return (
              <div className="station" key={index}>
                <div className="stationName">
                  <img
                    className="logo"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{station.name}</div>
                </div>

                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
            );
          })}
      </div>
      <div className="boomBox" style={{ backgroundImage: `url(${Background})`}}>
      </div>
    </div>
  );
}