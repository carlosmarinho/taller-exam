import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  background-color: #4abfe2;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 20px;
  width: 10%;
  img {
    height: 35px;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;
  }
`;

const Menu = styled.nav`
  display: flex;
  width: 90%;
  color: "#fff";
  height: 50px;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
    margin-left: -15%;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;

    hover {
      color: red;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">Teller logo</Link>
      </Logo>
      <Menu>
        <ul>
          <MenuItem>
            <Link to="/">Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/device">Create Device</Link>
          </MenuItem>
        </ul>
      </Menu>
    </HeaderContainer>
  );
}
