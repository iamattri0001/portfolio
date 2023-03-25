  import React from 'react';

  import { BsArrowUpRight } from 'react-icons/bs';
  import { motion } from 'framer-motion';
  import { fadeIn } from '../variants';


  const services = [
    {
      name: 'UI/UX Design',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam soluta iste deleniti optio eveniet alias?',
      link: 'Learn more'
    },
    {
      name: 'Web development',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam soluta iste deleniti optio eveniet alias?',
      link: 'Learn more'
    },
    {
      name: 'Digital Marketing',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam soluta iste deleniti optio eveniet alias?',
      link: 'Learn more'
    },
    {
      name: 'Product Branding',
      desctiption:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam soluta iste deleniti optio eveniet alias?',
      link: 'Learn more'
    }

  ]

  const Services = () => {
    return <section id='services' className='section'>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row '>
          {/* text and image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}

            className='flex-1 lg:bg-services mr-4 bg-left bg-contain lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 rounded-b-3xl'>
            <h2 className='h2 text-accent
            mb-6'>What i Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Full Stack Developer with over 2 Years of experience.</h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <div className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, desctiption, link } = service;
                return <motion.div
                  variants={fadeIn('left', 0.2 + index / 10)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 - index / 10 }}
                  key={index} className={`'border-b border-white/20 h-[146px] ${index === services.length-1 ? `` : `mb-[38px]` } flex items-center'`}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary'>{desctiption}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end
                  '>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex items-center justify-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </motion.div>
              })}
            </div>
          </div>

        </div>
      </div>
    </section>;
  };

  export default Services;
