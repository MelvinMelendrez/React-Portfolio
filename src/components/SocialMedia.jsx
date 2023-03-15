import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const socialNetworks = [
    {
        id: 3,
        href: 'https://www.linkedin.com/in/melvinmelendrez/',
        icon: AiFillLinkedin,
    },
    {
        id: 1,
        href: 'https://github.com/MelvinMelendrez',
        icon: AiFillGithub,
    },
    {
        id: 2,
        href: 'https://www.instagram.com/melvinmelendrez/',
        icon: AiFillInstagram,
    },
];

const SocialMedia = () => (
  <div className="app__social">
    {socialNetworks.map((network) => (
      <div key={network.id} onClick={() => window.open(network.href)}>
        <network.icon />
      </div>
    ))}
  </div>
);

export default SocialMedia;
