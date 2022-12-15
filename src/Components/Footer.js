import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
      <>
            <Ownfoter>
                  <Fade top><li href="#">Tesla © 2022</li></Fade>
                  <Fade top><li href="#">Privacy & Legal</li></Fade>
                  <Fade top><li href="#">Vehicle Recalls</li></Fade>
                  <Fade top><li href="#">Contact</li></Fade>
                  <Fade top><li href="#">Careers</li></Fade>
                  <Fade top><li href="#">News</li></Fade>
                  <Fade top><li href="#">Engage</li></Fade>
                  <Fade top><li href="#">Locations</li></Fade>
            </Ownfoter>
      </>
  )
}

export default Footer;

const Ownfoter = styled.div`
      display: flex;
      flex-direction: row;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      li{
            padding: 0px 6px;
            list-style-type: none;
            font-size: 12px;
            font-weight: 600; 
            letter-spacing : .7px;
            color: #5c5e62;
            cursor: pointer;
            @media (max-width: 660px){
                  padding: 10px 6px;
            }
            @media (max-width: 532px){
                  padding: 5px 6px;
                  list-style-type: none;
                  font-size: 12px;
                  font-weight: 600; 
            }
      }
      li:hover{
            text-decoration: underline; 
      }
      @media (max-width: 660px){
            flex-wrap: wrap;
      }
      @media (max-width: 532px){
            flex-direction : column;
      }
`