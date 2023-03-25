import React from 'react';
import CountUp from 'react-countup';
import { InView, useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5
  });

  return <section id='about' className='section' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row  gap-y-10 lg:items-center lg:gap-y-0 lg:gap-x-20 h-screen text-center lg:text-left'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          style={{ borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%  ' }}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-center'>
          {/* IMAGE */}
        </motion.div>

        <motion.div className='flex-1 '
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className='font-tertiary text-2xl lg:h2 text-accent'>About me.</h2>
          <h3 className='font-tertiary text-2xl lg:h3 mb-4'>I'm a Freelance Full Stack Developer with over 2 Years of experience.</h3>
          <p className='mb-2 lg:mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, iure. Laudantium aliquam dolores nisi sequi, rerum vel? Fugit mollitia illo, ratione nam sunt architecto quaerat et laboriosam commodi, maxime dolorem.</p>


          {/* stats */}
          <div className='flex justify-center lg:justify-start gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2 pt-1'>
                {
                  InView ?
                    <CountUp start={0} end={3} duration={2} />
                    :
                    null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br /> Completed
              </div>
            </div>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2 pt-1'>
                {
                  InView ?
                    <CountUp start={0} end={13} duration={2} />
                    :
                    null
                }
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br /> Clients
              </div>
            </div>
            <div>
              <div className=' text-[40px] font-tertiary text-gradient mb-2 pt-1'>
                {
                  InView ?
                    <CountUp start={0} end={10} duration={2} />
                    :
                    null
                }
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br /> Experience
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center justify-center lg:justify-start'>
            <button className="btn btn-lg">Contact me</button>
            <a href="#" className='btn-link text-gradient'>My Portfolio</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
