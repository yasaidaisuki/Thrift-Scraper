import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';

const Home = ({user_id,email}) => {
  const [isOpen, setIsOpen] = useState(false);
  //get email from login page
  const urlParams = new URLSearchParams(window.location.search);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar email={email}/>
      <Body user_id={user_id}/>
    </>
  )
}

export default Home