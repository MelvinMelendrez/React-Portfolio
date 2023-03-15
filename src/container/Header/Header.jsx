import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './Header.scss';
import { client, urlFor } from '../../client';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "img"] ';
      const data = await client.fetch(query);
      setImage(data);
    };
    fetchData();
  }, []);
  
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
      </motion.div>

      
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
        >
        {image.length > 1 && (
        <img src={urlFor(image[3].imagen).url()} alt={image[1].titulo} />
        )}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
      {[image[0]?.imagen, image[2]?.imagen, image[1]?.imagen].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          {circle && <img src={urlFor(circle).url()} alt="profile_bg" />}
        </div>
      ))}

      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');