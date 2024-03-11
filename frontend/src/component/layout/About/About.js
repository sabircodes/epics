import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
          
            <Typography>Team No. 27</Typography>
            <Button onClick={visitInstagram} color="primary">
             
            </Button>
            <span>
              This is a sample wesbite made by Team no. 27 . The Only purpose of this website is to help farmers
            </span>
          </div>
          <div className="aboutSectionContainer2">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
