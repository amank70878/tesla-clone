import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  desc,
  leftbtn,
  rightbtn,
  imgsrc,
  imgsrcR,
  textBig
}) => {
  console.log(imgsrcR);
  return (
    <>
      <Wrap bgImage={imgsrc} resbgImage={imgsrcR}>
        <Infodiv big={textBig}>
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
              {rightbtn && (
                <Buttonright>
                  <p>{rightbtn}</p>
                </Buttonright>
              )}
            </Fade>
          </Btndiv>
          <Fade top>
            {rightbtn ? (
              <Arrow>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                </svg>
              </Arrow>
            ) : (
              ""
            )}
          </Fade>
        </Lowerdiv>
      </Wrap>
    </>
  );
};

export default Section;

const Wrap = styled.div`
  color: #171a20;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Gotham SSm";
  width: 100vw;
  height: 100vh;
  padding: 150px 0px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 100px 0px 20px 0;
    background-image: ${(props) => `url(/images/${props.resbgImage})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 500px) {
    padding: 130px 0px 20px 0;
  }
  @media (max-width: 400px) {
    padding: 140px 0px 20px 0;
  }
`;
const Infodiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Gotham SSm";
  overflow: hidden;
  h1 {
    font-size: ${(props) => `${props.big===true?'34px':'40px'}`};
    color: #171a20;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    @media (max-width: 600px) {
      font-size: ${(props) => `${props.big===true?'27px':'36px'}`};
    }
    @media (max-width: 500px) {
      font-size: ${(props) => `${props.big===true?'27px':'36px'}`};
    }
    @media (max-width: 400px) {
      font-size: ${(props) => `${props.big===true?'27px':'38px'}`};
    }
  }
  p {
    color: #171a20;
    font-size: ${(props) => `${props.big===true?'14px':'17px'}`};
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    text-decoration: ${(props) => `${props.big===true?'':'underline'}`};
    line-height: 2;
    @media (max-width: 600px) {
      font-size: ${(props) => `${props.big===true?'14px':'16px'}`};
      // text-decoration: none;
    }
    @media (max-width: 400px) {
      font-size: ${(props) => `${props.big===true?'14px':'17px'}`};
      line-height: 1.2;
      text-decoration: none;
    }
  }
`;
const Lowerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const Btndiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  overflow: hidden;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;
const Buttonleft = styled.div`
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
            @media (max-width: 600px){
                  font-size: 14px;
                  font-family: 'Manrope', sans-serif;
                  font-weight: 500;
            }
      }
      @media (max-width: 850px){ 
            width: 220px;
      }
      @media (max-width: 600px){
            width: 92vw;
            margin: 10px 10px;
            padding: 8px 20px;
            font-size: 12px;
            text-align: center;
            padding: 10px 20px;
      }
      @media (max-width: 400px){
            width: 90vw;
            margin: 10px 5px;
            padding: 10px 20px;
            font-size: 11px;
            text-align: center;
      }
      
`;
const Buttonright = styled(Buttonleft)`
  background: rgb(244 244 244 / 65%);
  background: rgb(137 137 137);
  color: #fff;
`;
const Arrow = styled.div`
  svg {
    width: 25px;
    height: 25px;
    animation: downArrow infinite 1500ms;
    font-weight: 500;
  }
  overflow: hidden;
`;
