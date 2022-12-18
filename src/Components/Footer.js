import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <Ownfoter>
        <Fade top>
          <li href="#">Tesla © 2022</li>
        </Fade>
        <Fade top>
          <li href="#">Privacy & Legal</li>
        </Fade>
        <Fade top>
          <li href="#">Vehicle Recalls</li>
        </Fade>
        <Fade top>
          <li href="#">Contact</li>
        </Fade>
        <Fade top>
          <li href="#">Careers</li>
        </Fade>
        <Fade top>
          <li href="#">News</li>
        </Fade>
        <Fade top>
          <li href="#">Engage</li>
        </Fade>
        <Fade top>
          <li href="#">Locations</li>
        </Fade>
      </Ownfoter>
    </>
  );
};

export default Footer;

const Ownfoter = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 570px) {
    padding: 0 0 10px 0;
    flex-direction: column;
  }
  li {
    padding: 10px 10px;
    width: 140px;
    font-size: 15px;
    margin: 10px 5px;
    list-style-type: none;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #5c5e62;
    cursor: pointer;
    background: rgb(0 0 0 / 5%);
    text-align: center;
    border-radius: 10px;
    @media (max-width: 1000px) {
      padding: 7px 10px;
      width: 130px;
      font-size: 13px;
      margin: 7px 5px;
    }
    @media (max-width: 600px) {
      padding: 5px 7px;
      width: 120px;
      font-size: 11px;
      margin: 7px 5px;
    }
    @media (max-width: 532px) {
      // padding: 5px 6px;
      list-style-type: none;
      font-size: 12px;
      font-weight: 600;
    }
  }
  li:hover {
    text-decoration: underline;
  }
`;
