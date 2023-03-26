import React from 'react';

//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';

//import link
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom';

const Nav = ({active}) => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
      <div className='w-full bg-black/20 h-[82px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link
          // activeClass='active'
          // spy={true}
          // smooth={true}
          to='/'
          className={`rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white/75 transition-all ${active === 'home' ? `active` : ``}`}>
          <BiHomeAlt />
        </Link>


        <Link to='/about'
          className={`rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white/75 transition-all ${active === 'about' ? `active` : ``}`}>
          <BiUser />
        </Link>


        <Link to='/services'
          className={`rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white/75 transition-all ${active === 'services' ? `active` : ``}`}>
          <BsClipboardData />
        </Link>


        <Link

          to='/work'
          className={`rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white/75 transition-all ${active === 'work' ? `active` : ``}`}>
          <BsBriefcase />
        </Link>

        <Link

          to='/contact'
          className={`rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white/75 transition-all ${active === 'contact' ? `active` : ``}`}>
          <BsChatSquare />
        </Link>

      </div>
    </div>
  </nav>;
};

export default Nav;
