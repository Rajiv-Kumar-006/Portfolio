import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <div className="contaier contact bg-dark" id='contact'>
        <h1>
          CONTACT ME
        </h1>
        <div className="contact-icon" >
          <a  href='https://www.instragram.com' target="_blank"  className="items" ><FaInstagram  className='icons'/></a>
          <a href='https://www.facebook.com'  target="_blank" className="items"><CiFacebook className='icons'/></a>
          <a  href='https://www.linkdin.com' target="_blank" className="items"><CiLinkedin className='icons'/></a>
          <a href='https://www.twitter.com'  target="_blank" className="items"><FiTwitter className='icons'/></a>
          <a href='https://www.github.com'  target="_blank" className="items"><FaGithub className='icons'/></a>
          <a  href='https://www.google.com' target="_blank" className="items"><SiGmail className='icons'/></a>
        </div>
      </div>
    </>
  )
}

export default Contact
