import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [Menutoggle, setMenutoggle] = useState(false);
  return (
    <Headerdiv>
      <Uldiv>
        <Firstdiv>
          <svg
            className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            ></path>
          </svg>
        </Firstdiv>
        <Seconddiv>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </Seconddiv>
        <Thirddiv>
          <li className="thirdLi">Shop</li>
          <li className="thirdLi">Account</li>
          <li onClick={() => setMenutoggle(true)}>Menu</li>
        </Thirddiv>
      </Uldiv>
      <Hamburger show={Menutoggle}>
        <div id="close">
          <button>
            <svg
              onClick={() => setMenutoggle(false)}
              className="tds-icon tds-icon-close tds-modal-close-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Charging</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
        <li>Shop</li>
        <li>Account</li>
        <li>More</li>
        <div id="global">
          <svg
            className="tds-icon tds-icon-globe"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9.254 20.047a8.147 8.147 0 0 1-.768-1.378c-.404-.91-.722-1.985-.935-3.169h-3.3a8.526 8.526 0 0 0 5.003 4.547Zm.603-1.988c.336.757.718 1.324 1.103 1.69.382.364.732.501 1.04.501.308 0 .658-.137 1.04-.5.385-.367.767-.934 1.103-1.69.321-.723.588-1.59.78-2.56H9.076c.192.97.459 1.837.78 2.56ZM8.75 12c0 .691.036 1.36.103 2h6.294c.067-.64.103-1.309.103-2 0-.691-.036-1.36-.103-2H8.853c-.067.64-.103 1.309-.103 2Zm-1.405-2H3.737a8.522 8.522 0 0 0-.237 2c0 .689.082 1.359.237 2h3.608a20.75 20.75 0 0 1 0-4Zm1.732-1.5h5.845c-.19-.97-.458-1.837-.779-2.56-.336-.756-.718-1.323-1.103-1.69-.382-.363-.732-.5-1.04-.5-.308 0-.658.137-1.04.5-.385.367-.767.934-1.103 1.69-.321.723-.588 1.59-.78 2.56Zm7.577 1.5a20.728 20.728 0 0 1 0 4h3.61a8.52 8.52 0 0 0 .236-2 8.52 8.52 0 0 0-.237-2h-3.609Zm3.094-1.5a8.526 8.526 0 0 0-5.002-4.547c.287.408.543.873.768 1.378.404.91.722 1.985.935 3.169h3.3Zm-12.197 0c.213-1.184.531-2.26.935-3.169.225-.505.48-.97.768-1.378A8.526 8.526 0 0 0 4.252 8.5h3.3Zm7.963 10.169c-.225.505-.48.97-.768 1.378a8.526 8.526 0 0 0 5.002-4.547h-3.3c-.212 1.184-.53 2.26-.934 3.169Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>
            <h5>United States</h5>
            <p>English</p>
          </span>
        </div>
      </Hamburger>
    </Headerdiv>
  );
};

export default Header;

const Headerdiv = styled.div`
  font-weight: 500;
  letter-spacing: 0.2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Uldiv = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    padding: 12px 14px;
  }
`;
const Firstdiv = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 120px;
    height: 24px;
    cursor: pointer;
    @media (max-width: 1200px) {
      width: 110px;
    }
    @media (max-width: 400px) {
      width: 100px;
    }
  }
`;
const Seconddiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  li {
    list-style: none;
    margin: 0px 15px;
    text-decoration: none;
    color: #171a20;
    cursor: pointer;
  }
  li:hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Thirddiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  li {
    list-style: none;
    margin: 0px 0px 0px 15px;
    text-decoration: none;
    color: #171a20;

    @media (max-width: 1200px) {
      background: rgb(0 0 0 / 5%);
      padding: 6px 10px;
      border-radius: 5px;
      font-size: 16px;
    }
    @media (max-width: 290px) {
      font-size: 14px;
    }
    @media (max-width: 213px) {
      font-size: 11px;
    }
  }
  .thirdLi {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
const Hamburger = styled.div`
  z-index: 9;
  overflow: scroll;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: ${(props) => (props.show ? "translateX(0)" : " translateX(100%)")};
  transition: transform 400ms ease-in;
  padding: 0px 35px;
  width: 15vw;
  font-size: 14px;
  background: white;
  color: #393c41;
  display: flex;
  flex-direction: column;
  li {
    list-style-type: none;
    margin: 12px 0px;
    overflow: visible;
  }
  #close {
    height: 50px;
    position: relative;
    z-index: 1000;
    button {
      padding: 5px 10px 2px 10px;
      border-radius: 10px;
      background: lightgrey;
      position: fixed;
      top: 16px;
      right: 30px;
      border: none;
      z-index: 1000;
    }
    svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
      color: #000;
      z-index: 1000;
    }
  }

  #global {
    margin: 7px 0px;
    display: flex;
    align-items: center;
    overflow-x: visible;
    height: 50px;
    svg {
      width: 20px;
      margin-right: 10px;
    }
    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 1400px) {
    width: 25vw;
  }
  @media (max-width: 1100px) {
    width: 30vw;
  }
  @media (max-width: 660px) {
    width: 50vw;
  }
  @media (max-width: 450px) {
    width: 60vw;
  }
  @media (max-width: 400px) {
    width: 82vw;
    font-size: 0.9em;
    letter-spacing: 1px;
  }
  @media (max-height: 800px) {
    font-size: 12px;
  }
  @media (max-height: 650px) {
    padding: 40px 35px 20px 35px;
  }
`;
