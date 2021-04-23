import { prettyDOM } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";

const VideoPreviewText = ({ videoInfo, videoInfo2, videoInfoGenres1, videoInfoGenres2, productionComp, language }) => {
  return (
    <div className="videoPreviewText">
      <div className="videoPreviewText__1">
        <div className="videoPreviewText__1-1">
          <br />
          <p>
          Rated<span> {videoInfo2.vote_average} in popularity.</span> {videoInfo2.runtime} min.
          </p>
          <h2>{videoInfo2.tagline}</h2>
          <br />
          <p id="SamenvattingFilm">{videoInfo.overview}</p>
        </div>
        <div className="videoPreviewText__1-2">
          <br />
          <p>
            <span>Spoken language:</span> {language.name}
          </p>
          <p>
            <span>Genres:</span>
            {`${videoInfoGenres1.name}

            ${videoInfoGenres2.name}`}
          </p>
          <p>
            <span>Release date:</span> {videoInfo2.release_date}
          </p>
        </div>
      </div>
      <div className="videoPreviewText__2">
        <h1>{videoInfo.title}</h1>
        <br />
        <p>
          <span>production companies:</span>{productionComp.name}
        </p>
        <p>
          <span>Spoken language:</span> {language.name}
        </p>
        {/* <p>
          <span>SCHRIJVER:</span> api
        </p> */}
        <p>
          <span>GENRE:</span>{" "}
          {`${videoInfoGenres1.name} ${videoInfoGenres2.name}`}
        </p>
        {/* <p>
          <span>DEZE TITEL IS:</span> MEESLEPEND, FEELGOOD
        </p> */}
        {/* <p>
          <span>LEEFTIJDCLASSIFICATIE:</span> #ICON #ICON kan angst en geweld bevatten.
        </p> */}
      </div>
    </div>
  );
};

export default VideoPreviewText;
