import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';

const Section = ({title, desc, leftbtn, rightbtn, imgsrc}) => {
  return (
      <>
            <Wrap bgImage={imgsrc}>
                  <Infodiv>
                        <Fade bottom>
                              <h1>{title}</h1>
                              <p>{desc}</p>
                        </Fade>
                  </Infodiv>
                  <Lowerdiv>
                        <Btndiv>
                              <Fade left>
                              <Buttonleft>
                                    <p>{leftbtn}</p>
                              </Buttonleft>
                              </Fade>
                              <Fade right>
                              {rightbtn &&  <Buttonright>
                                    <p>{rightbtn}</p>
                              </Buttonright> }
                              </Fade>
                        </Btndiv>
                              <Fade top>
                              { rightbtn ? <Arrow>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
                              </Arrow>: <Footer/> }
                              </Fade>
                  </Lowerdiv>
            </Wrap>
      </>
  )
}

export default Section;

const Wrap = styled.div`
      color: #171a20;
      background-image : ${props => `url(/images/${props.bgImage})`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      font-family: 'Gotham SSm';
      width: 100vw;
      height: 100vh;
      padding: 150px 0px 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden; 
      @media (max-width: 800px){
            padding: 120px 0px 20px 0;
      }
      @media (max-width: 600px){
            padding: 100px 0px 20px 0;
      }
      @media (max-width: 450px){
            background-size: 175% 100%;
      }
`
const Infodiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: 'Gotham SSm';
      overflow: hidden;
      h1{
            font-size: 40px;
            letter-spacing: 2px;
            @media (max-width: 690px){
                  font-size: 2em;
            }
            @media (max-width: 399px){
                  font-size: 1.6em;
            }
      }
      p{
            font-size: 17px;
            margin-top: 5px;
            text-decoration: underline;
            @media (max-width: 690px){
                  font-size: .8em;
            }
            @media (max-width: 399px){
                  font-size: .7em;
            }
      }
`
const Lowerdiv = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
`
const Btndiv = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      overflow: hidden;
      @media (max-width: 600px){
            flex-direction: column;
      }
`
const Buttonleft = styled.div`
      background: rgb(33 ,24, 31 ,0.300);
      background: rgb(23 26 32 / 80%);
      font-weight: 600;
      letter-spacing: 1.2px;
      width: 265px;
      margin: 10px;
      padding: 11px 24px;
      border-radius: 2px;
      color: white;
      cursor: pointer;
      border-radius:5px;
      font-size: 14px
      text-align: center;
      p{
            text-align: center;
            @media (max-width: 500px){
                  
            }
      }
      @media (max-width: 850px){ 
            width: 220px;
      }
      @media (max-width: 600px){
            width: 90vw;
            margin: 10px 10px;
            padding: 8px 20px;
            font-size: 12px;
            text-align: center;
      }
      @media (max-width: 400px){
            width: 85vw;
            margin: 5px 5px;
            padding: 8px 20px;
            font-size: 11px;
            text-align: center;
      }
      
`
const Buttonright = styled(Buttonleft)`
      background: rgb(244 244 244 / 65%);
      color: grey;
`
const Arrow = styled.div`
      svg{
            width: 25px;
            height: 25px;
            animation: downArrow infinite 1500ms;
      }
      overflow: hidden;
`