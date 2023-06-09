import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Contact = () => {
  return <section id='contact' className='lg:section py-16'>
    <div className="container mx-auto">
      <div className='flex flex-col
       lg:flex-row'>
        <motion.div className='flex-1 flex justify-start items-center'
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br />together!</h2>
          </div>
        </motion.div>
        <motion.form
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='flex-1 border rounded-2xl flex flex-col pb-24 gap-y-6 p-6 items-start'>
          <input type="text" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all duration-200' placeholder='Your name' />
          <input type="text" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all duration-200' placeholder='Your email' />
          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all resize-none mb-12 duration-200' placeholder='Your message'></textarea>
          <button className='btn btn-lg'>Send message</button>

        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
