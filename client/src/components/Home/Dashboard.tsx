import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  //get email from login page
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('parameter');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar email={email}/>
      <Body/>
    </>
  )
}

export default Home