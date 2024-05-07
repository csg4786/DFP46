import React from "react";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";

import VideoURL from "../../../assets/RayOptics/SnellsLawDerivation.mp4";

const Refraction = () => {
  return (
    <Container>
      {/* <div style={{ position: "relative", paddingTop: "56.25%" }}> */}
      <ReactPlayer
        url={VideoURL}
        playing
        controls
        width="100%"
        height="100%"
        //   style={{ position: "absolute", top: 0, left: 0 }}
      />
      {/* </div> */}
    </Container>
  );
};

export default Refraction;
