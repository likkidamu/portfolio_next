import React, { useState } from 'react';

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaLeaf, FaJava, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

// about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
      {
        title: 'Backend',
        icons: [FaLeaf, FaJava, FaDatabase],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Microsoft Partner of the Year Award',
        stage: '2020 - 2021',
      },
      {
        title: 'Cannes Lions International Festival of Creativity - Grand Prix',
        stage: '2018',
      },
      {
        title: 'The Webby Awards - Best Visual Design',
        stage: '2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Java Developer|Numeric Technologies',
        stage: '2024',
      },
      {
        title: 'Full Stack Web Developer|Sudhi Informatics Inc',
        stage: '2019 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Master of Science (M.S.) in Information Systems - University of Memphis, Tennessee',
        stage: '2024',
      },
      {
        title: 'Bachelor of Technology (B.Tech.) in Computer Science - CVR College of Engineering, Hyderabad',
        stage: '2021',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[2000px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            10 years ago, I began freelancing as a developer. Since then, I have
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((Icon, iconIndex) => {
                      return (
                        <div className='text-2xl text-white' key={`${iconIndex}-${itemIndex}`}>
                          <Icon />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
