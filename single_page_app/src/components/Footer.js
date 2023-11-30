import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <header className="bg-sky-500 p-3 text-white mt-80">
      <ul className='flex justify-center'>
        <Link to="/about"><li className='inline px-5'>About</li></Link>
        <Link to='/contact'><li className='inline'>Contact</li></Link>
      </ul>
    </header>
  );
};

export default Footer;
