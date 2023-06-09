import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
  
    return (
        <Container  className='mt-4'>
        <div className="text-center">
          <img src={logo} alt="" />
          <p className="text-secondart">Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
          </div>
          <div className='d-flex bg-light p-4 gap-4'>
          <Button variant="danger">Danger</Button>
          <Marquee className="text-danger" speed={100}>
  I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text........
</Marquee>
          </div>
        </Container>
    );
};

export default Header;