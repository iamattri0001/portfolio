import React from 'react';

import Image from '../assets/banner.jpg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'


import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'
const Banner = () => {

  return <section className='section min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='font-bold text-[55px] lg:text-[85px] leading-[0.8] '> DEEPANSHU <span>ATTRI</span> </motion.h1>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='mb-6 text-[32px] lg:text-[60px] font-secondary font-semibold leading-[1]'>
            <span className='mr-4 text-white/90'>I am a</span>
            <TypeAnimation
              sequence={['Developer', 2000, 'Programmer', 2000, 'Designer', 2000, 'Engineer', 2000]}
              speed={40}
              repeat={Infinity}
              className='text-accent inline-block'
            />
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi voluptatum, laboriosam adipisci impedit ratione explicabo asperiores dicta recusandae et.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href="/" className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>


          {/* socials */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center'>
            <a href="https://github.com/iamattri0001" target={'_blank'} rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/deepanshu-attri-17a895241/" target={'_blank'} rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/iamattri0001/" target={'_blank'} rel="noreferrer">
              <FaInstagram />
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt="" className='h-[560px]' style={{ borderRadius: '100% 0% 100% 0% / 78% 22% 78% 22%' }} />
        </motion.div>

      </div>

    </div>
  </section>;
};

export default Banner;
