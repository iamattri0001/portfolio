import React from 'react';
import {DiCodeigniter} from 'react-icons/di'
const Header = () => {
  return <header className='py-8 mb-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href="">
          <DiCodeigniter className='text-[48px] text-purple-400' />
        </a>
        <button className='btn btn-sm'>Work With me</button>
      </div>
    </div>
  </header>;
};

export default Header;
