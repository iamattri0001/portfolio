import React from 'react';
import {DiCodeigniter} from 'react-icons/di'
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='py-8 mb-2'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <Link to="/">
          <DiCodeigniter className='text-[48px] text-purple-400' />
        </Link>
        <button className='btn btn-sm'>Work With me</button>
      </div>
    </div>
  </header>;
};

export default Header;
