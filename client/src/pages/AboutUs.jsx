import React from 'react';
import { Link } from 'react-router-dom';
import SectionTwo from '../Components/Home/SectionTwo';
import SectionThree from '../Components/Home/SectionThreee';
import MissionAndVision from '../Components/Home/MissionAndVision';
import SectionOne from '../Components/Home/SectionOne';
const AboutUs = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <MissionAndVision />
    </div>
  );
};

export default AboutUs;