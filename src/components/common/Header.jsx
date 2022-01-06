import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: lightgray;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 20px;
  width: 10%;
  img {
    height: 35px;
  }
`;

const Menu = styled.nav`
  display: flex;
  width: 90%;
  color: "#fff";
  height: 40px;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 10px;
  cursor: pointer;

  :hover {
    color: "#666";
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
          <Link to="/">
            <MenuItem>Dashboard</MenuItem>
          </Link>
          <Link to="/device">
            <MenuItem>Device</MenuItem>
          </Link>
        </ul>
      </Menu>
    </HeaderContainer>
  );
}
