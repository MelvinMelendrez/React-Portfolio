import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper/index';

import { motion } from 'framer-motion';


import './About.scss';
import { client, urlFor } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "abouts"]'
      const data = await client.fetch(query)
      setAbouts(data)
    }
    fetchData()
  }, [])
  
  return (
    <>
      <h2 className="head-text">Work <span>abilities</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
          <img key={about.slug} alt='' src={urlFor(about.imgUrl).toString()   } />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
  
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);